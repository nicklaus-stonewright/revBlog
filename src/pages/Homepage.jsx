import Brandbar from "../components/BrandBar";
import Navbar from "../components/Navbar";
// import BlogPosts from "../collection/BlogPosts";
import BlogPost from "../components/BlogPost";
import LatestNews from "../collection/LatestNews";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();
  const formattedArray = [];
  const [posts, setPosts] = useState(formattedArray);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/blogposts");
      const dataObjects = response.data.data;

      const arrayOfKeys = Object.keys(dataObjects);
      const arrayOfData = Object.keys(dataObjects).map(
        (key) => dataObjects[key]
      );
      const formattedArray = [];
      arrayOfKeys.forEach((key, index) => {
        const formattedData = { ...arrayOfData[index] };
        formattedData["documentId"] = key;
        formattedArray.push(formattedData);
      });
      setPosts(formattedArray);
    }
    fetchData();
  }, []);

  return (
    <div className="homepage">
      <div className="bar-container">
        <Brandbar />
        <Navbar />
      </div>
      <h1>Welcome to StaffNet</h1>
      <div className="blogposts-container">
        {/* <BlogPosts posts={posts} />
         */}
        {posts.map((post, _index) => (
          <BlogPost id={_index} post={post} />
        ))}
      </div>
      <div
        className="icon icon-height container"
        onClick={() => navigate("/post")}
      >
        +
      </div>
      <div className="latestnews-container">
        <LatestNews />
      </div>
    </div>
  );
};

export default Homepage;
