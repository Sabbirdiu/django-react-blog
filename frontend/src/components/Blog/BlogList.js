import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
const BlogList = () => {
  const { blogs, capitalizeFirstLetter } = useGlobalContext();
  console.log(blogs);
  let list = [];
  let result = [];

  blogs.map((blogPost) => {
    const { category, title, day, excerpt, slug, thumbnail } = blogPost;
    return list.push(
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            {capitalizeFirstLetter(category)}
          </strong>
          <h3 className="mb-0">{title}</h3>
          <div className="mb-1 text-muted">
            {blogPost.month} {day}
          </div>
          <p className="card-text mb-auto">{excerpt}</p>
          <Link to={`/blog/${slug}`} className="stretched-link">
            Continue reading
          </Link>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img width="200" height="250" src={thumbnail} alt="thumbnail" />
        </div>
      </div>
    );
  });

  for (let i = 0; i < list.length; i += 2) {
    result.push(
      <div key={i} className="row mb-2">
        <div className="col-md-6">{list[i]}</div>
        <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
      </div>
    );
  }

  return result;
};

export default BlogList;
