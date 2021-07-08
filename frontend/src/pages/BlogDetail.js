import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
const BlogDetail = (props) => {
  const { blog, setBlog, capitalizeFirstLetter, createBlog } =
    useGlobalContext();

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/${slug}`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id, setBlog]);

  return (
    <div className="container mt-3">
      <h1 className="display-2">{blog.title}</h1>
      <h2 className="text-muted mt-3">
        Category: {capitalizeFirstLetter(blog.category)}
      </h2>
      <h4>
        {blog.month} {blog.day}
      </h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className="lead mb-5">
        <Link to="/blog" className="font-weight-bold">
          Back to Blogs
        </Link>
      </p>
    </div>
  );
};

export default BlogDetail;
