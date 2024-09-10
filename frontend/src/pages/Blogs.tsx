import { BlogCard } from "../components/BlogCard";

function Blogs() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          authorName={"Ankit"}
          title={"title esdjfjbfjsk  kjsdfkfjsn sdkjf"}
          content={
            "content jksdnfjknsdjkfn ksjednfnf jesdnfjk nwj njnjk snj  jn jnsjf jk anskn jn ..."
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"Ankit"}
          title={"title esdjfjbfjsk  kjsdfkfjsn sdkjf"}
          content={
            "content jksdnfjknsdjkfn ksjednfnf jesdnfjk nwj njnjk snj  jn jnsjf jk anskn jn ..."
          }
          publishedDate={"2nd Feb 2024"}
        />
        <BlogCard
          authorName={"Ankit"}
          title={"title esdjfjbfjsk  kjsdfkfjsn sdkjf"}
          content={
            "content jksdnfjknsdjkfn ksjednfnf jesdnfjk nwj njnjk snj  jn jnsjf jk anskn jn ..."
          }
          publishedDate={"2nd Feb 2024"}
        />
      </div>
    </div>
  );
}

export default Blogs;
