"use client";
import BlogCard from "./components/BlogCard";
import Link from "next/link";
import profilePic from "@/public/Images/ProfilePic.svg";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import BlogHeader from "./components/BlogHeader";
import additional from "@/public/Images/additional.svg";
import BlogPage from "./components/BlogPage";

import authimage from "@/public/Images/Authorimage.svg";

const MainBlogPage = () => {
  return (
    <div className="bg-white">
      <Header />

      {/* <BlogPage
        title={"The essential guide to Competitive Programming"}
        authorName={"chaltu kebede"}
        authorRole={"software engineer"}
        authorImage={authimage}
        date={"6 minute read"}
        mainImage={additional}
        content={`We know that data structure and algorithm can seem hard at first glance. And you
may not be familiar with advanced algorithms, but there are simple steps you can
follow to see outstanding results in a short period of time.`}
        article={[
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          `,
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        ]}
      /> */}

      <BlogHeader />
      <BlogCard
        title={"The essential guide to Competitive Programming"}
        author={"Yididiya Kebede"}
        date={"Apr 16, 2022"}
        description={"SOFTWARE ENGINEER"}
        subheading={"Tab System On React : 3 ways to do it. "}
        tags={[`UI/UX`,`Development`]}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "}
        mainImageUrl={profilePic}
      />
      <BlogCard
        title={"The essential guide to Competitive Programming"}
        author={"Yididiya Kebede"}
        date={"Apr 16, 2022"}
        description={"SOFTWARE ENGINEER"}
        subheading={"Tab System On React : 3 ways to do it. "}
        tags={[`UI/UX`,`Development`]}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "}
        mainImageUrl={profilePic}
      />
      <BlogCard
        title={"The essential guide to Competitive Programming"}
        author={"Yididiya Kebede"}
        date={"Apr 16, 2022"}
        description={"SOFTWARE ENGINEER"}
        subheading={"Tab System On React : 3 ways to do it. "}
        tags={[`UI/UX`,`Development`]}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "}
        mainImageUrl={profilePic}
      />
    </div>
  );
};

export default MainBlogPage;
