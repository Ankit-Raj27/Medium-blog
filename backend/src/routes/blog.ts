import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@switchnegeek1/blog-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    prisma: any;
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  const user = await verify(authHeader, c.env.JWT_SECRET);
  if (user) {
    c.set("userId", user.id as string);
    await next();
  } else {
    c.status(403);
    return c.json({ error: "You are not logged in!" });
  }
});

blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

blogRouter.post("/", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const authorId = c.get("userId");
  const { success } = createBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.text("Inputs not correct! ");
    }
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId),
    },
  });
  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.text("Inputs not correct! ");
    }
  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});

// Todo : pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = c.get("prisma");
  const blogs = await prisma.blog.findMany();

  return c.json({ blogs });
});
blogRouter.get("/:id", async (c) => {
  const prisma = c.get("prisma");
  const id = c.req.param("id");
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });
    return c.json(blog);
  } catch (e) {
    c.status(411);
    return c.json({
      error: "Error while fetching blog post",
    });
  }
});
