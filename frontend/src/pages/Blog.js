import React from "react";
import BlogList from "../components/Blog/BlogList";

import BlogCategory from "../components/Blog/BlogCategory";
const Blog = () => {
  return (
    <div className="container mt-3">
      <BlogCategory />
      <BlogList />
    </div>
  );
};

export default Blog;
