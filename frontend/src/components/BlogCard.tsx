import { Link } from "react-router-dom";
interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export function BlogCard({
  id,
  authorName,
  content,
  title,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            {" "}
            <Circle />{" "}
          </div>
          <div className="pl-2 font-thin text-sm text-slate-400 flex-col justify-center">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-md font-thin">
          {content.slice(0, 100) + "..."}{" "}
        </div>
        <div className="text-slate-600 font-thin text-sm pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}{" "}
        </div>
      </div>
    </Link>
  );
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-mg"
        } text-gray-600 dark:text-gray-300 `}
      >
        {name[0]}
      </span>
    </div>
  );
}

function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-400 "></div>;
}
