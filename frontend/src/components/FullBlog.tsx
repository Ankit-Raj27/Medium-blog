import { Blog } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-h-screen-xl pt-10">
          <div className="col-span-8 ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className=" text-slate-500 pt-3">Posted on 2nd Dec 2023</div>
            <div className="pt-6">{blog.content}</div>
          </div>
          <div className="col-span-4 ">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex pt-4">
              <div className="pr-4 flex justify-center">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div>
                <div className=" text-2xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
