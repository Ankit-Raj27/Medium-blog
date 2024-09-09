import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    prisma: any;
  };
}>();

app.use("*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  next();
});

app.use("/api/v1/*", async (c, next) => {
  // get header
  // verify header
  // if header is valid, continue
  // else return 403
  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);
  if (response) next();
  else return c.json({ error: "Unauthorized" });
});

app.post("/api/v1/signup", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (e) {
    return c.status(403);
  }
});
app.post("/api/v1/signin", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });
  if (!user) {
    return c.json({ error: "Invalid email or password" });
  }
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ token });
});
app.post("/api/v1/blog", (c) => {
  return c.text("create");
});
app.put("/api/v1/blog", (c) => {
  return c.text("update");
});
app.get("/api/v1/blog/:id", (c) => {
  return c.text("get");
});
export default app;
