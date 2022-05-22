import Brandbar from "../components/BrandBar";
import Navbar from "../components/Navbar";
import BlogPosts from "../collection/BlogPosts";
import LatestNews from "../collection/LatestNews";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="bar-container">
        <Brandbar />
        <Navbar />
      </div>
      <h1>Welcome to StaffNet</h1>
      <div className="blogposts-container">
        <BlogPosts />
      </div>
      <div className="latestnews-container">
        <LatestNews />
      </div>
    </div>
  );
};

export default Homepage;
