import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
const BlogCategory = () => {
  const { featuredBlog } = useGlobalContext();
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <Link className="p-2 text-muted" to="/category/world">
          World
        </Link>
        <Link className="p-2 text-muted" to="/category/environment">
          Environment
        </Link>
        <Link className="p-2 text-muted" to="/category/technology">
          Technology
        </Link>
        <Link className="p-2 text-muted" to="/category/design">
          Design
        </Link>
        <Link className="p-2 text-muted" to="/category/culture">
          Culture
        </Link>
        <Link className="p-2 text-muted" to="/category/business">
          Business
        </Link>
        <Link className="p-2 text-muted" to="/category/politics">
          Politics
        </Link>
        <Link className="p-2 text-muted" to="/category/opinion">
          Opinion
        </Link>
        <Link className="p-2 text-muted" to="/category/science">
          Science
        </Link>
        <Link className="p-2 text-muted" to="/category/health">
          Health
        </Link>
        <Link className="p-2 text-muted" to="/category/style">
          Style
        </Link>
        <Link className="p-2 text-muted" to="/category/travel">
          Travel
        </Link>
      </nav>
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
          <p className="lead my-3">{featuredBlog.excerpt}</p>
          <p className="lead mb-0">
            <Link
              to={`/blog/${featuredBlog.slug}`}
              className="text-white font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
