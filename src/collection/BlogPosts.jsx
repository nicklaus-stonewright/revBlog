import BlogPost from "../components/BlogPost";
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

const BlogPosts = (posts) => {
  // const [posts, setPosts] = useState(null);
  const navigate = useNavigate();


  return (
    <div className="blog-posts">
      <h2>BlogPosts</h2>
      {posts.map((post, _index) => (
        <BlogPost id={_index} post={post} />
      ))}
      <div className="icon icon-height" onClick={() => navigate("/blogposts")}>
        +
      </div>
    </div>
  );
};

export default BlogPosts;
