import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children, props }) => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        setFeaturedBlog(res.data[0]);
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/`
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);
  // details page

  const createBlog = () => {
    return { __html: blog.content };
  };

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  return (
    <AppContext.Provider
      value={{
        blogs,
        featuredBlog,
        capitalizeFirstLetter,
        blog,
        createBlog,
        setBlog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
