import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { singinInput, singupInput } from "@switchnegeek1/blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    prisma: any;
  };
}>();

userRouter.use("*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

userRouter.post("/signup", async (c) => {
  try {
    const body = await c.req.json();
    const prisma = c.get("prisma");
    const { success } = singupInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.text("Inputs not correct! ");
    }
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(jwt);
  } catch (e) {
    c.status(411);
    return c.text("Invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const { success } = singinInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.text("Inputs not correct! ");
    }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (error) {
    c.status(411);
    return c.text("Invalid");
  }
});
