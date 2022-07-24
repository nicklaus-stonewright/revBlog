import Brandbar from "../components/BrandBar";
import Navbar from "../components/Navbar";
// import BlogPosts from "../collection/BlogPosts";
import BlogPost from "../components/BlogPost";
// import LatestNews from "../collection/LatestNews";
import Article from "../components/Article";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const formattedPostsArray = [];
  const [posts, setPosts] = useState(formattedPostsArray);
  const formattedNewsArray = [];
  const [news, setNews] = useState(formattedNewsArray);

  useEffect(() => {
    async function fetchPostsData() {
      const response = await axios.get("http://localhost:8000/blogposts");
      const dataObjects = response.data.data;

      const arrayOfKeys = Object.keys(dataObjects);
      const arrayOfData = Object.keys(dataObjects).map(
        (key) => dataObjects[key]
      );

      const formattedPostsArray = [];
      arrayOfKeys.forEach((key, index) => {
        const formattedPostsData = { ...arrayOfData[index] };
        formattedPostsData["documentId"] = key;
        formattedPostsArray.push(formattedPostsData);
      });
      setPosts(formattedPostsArray);
    }
    fetchPostsData();

    async function fetchNewsData() {
      const response = await axios.get("http://localhost:8000/news");
      const dataObjects = response.data.data;
      const arrayOfKeys = Object.keys(dataObjects);
      const arrayOfData = Object.keys(dataObjects).map(
        (key) => dataObjects[key]
      );
      const formattedNewsArray = [];
      arrayOfKeys.forEach((key, index) => {
        const formattedNewsData = { ...arrayOfData[index] };
        formattedNewsData["category"] = key;
        formattedNewsArray.push(formattedNewsData);
      });
      setNews(formattedNewsArray);
    }
    fetchNewsData();
  }, []);

  return (
    <div className="homepage">
      <div className="bar-container">
        <Brandbar />
        <Navbar />
      </div>
      <h1>Welcome to StaffNet</h1>
      <div className="blogposts-container">
        <h2>Recent posts</h2>
        {posts.map((post, _index) => (
          <BlogPost key={post.documentId} id={_index} post={post} />
        ))}
      </div>
      <div
        className="icon icon-height container"
        onClick={() => navigate("/post")}
      >
        +
      </div>
      <div className="latestnews-container">
        <h2>Latest news</h2>
        {news.map((article, _index) => (
          <Article key={_index} id={_index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
