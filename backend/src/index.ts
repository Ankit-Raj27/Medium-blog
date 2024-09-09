import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/signup", (c) => {
  return c.text("Signup");
});
app.post("/api/v1/signin", (c) => {
  return c.text("signin");
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
