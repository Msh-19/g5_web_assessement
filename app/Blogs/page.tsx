import BlogCard from "./components/BlogCard";
import Link from "next/link";

const MainBlogPage = () => {
  return (
    <div>
        <div>
      <Link href="/BlogPage">
        <BlogCard
          title={""}
          author={""}
          date={""}
          description={""}
          tags={[]}
          imageUrl={""}
        />
      </Link>
        </div>
    </div>
  );
};

export default MainBlogPage