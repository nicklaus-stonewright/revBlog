import BlogPost from "../components/BlogPost";
import { useNavigate } from "react-router-dom";

const BlogPosts = () => {
  const navigate = useNavigate();
  const blogPostsCollection = [
    {
      topic: "performance review",
      title: "review was focused on finding mistakes",
      message: "they kept trying to find mistakes in everything I did",
      owner: "Annie",
      avatar: "../assets/images/owsama-hat.jpg",
      status: "active",
      timestamp: "2022-02-11T07:36:17+0000",
      company: "Pool",
      notification: "none",
      support: "supported",
    },
    {
      topic: "recruitment process",
      title: "interview was unprofessional",
      message: "interviewer was drunk",
      owner: "Annie",
      avatar: "./assets/images/doctorwho01.png",
      status: "active",
      timestamp: "2022-03-12T07:36:17+0000",
      company: "UNKNOWN",
      notification: "none",
      support: "unsupported",
    },
    {
      topic: "performance review",
      title: "reviewer was racist",
      message: "reviewer was racist",
      owner: "Annie",
      avatar: "./assets/images/blank-avatar.jpg",
      status: "active",
      timestamp: "2022-05-21T07:36:17+0000",
      company: "",
      notification: "none",
      support: "unsupported",
    },
  ];

  return (
    <div className="blog-posts">
      <h2>BlogPosts</h2>
      {blogPostsCollection.map((posts, _index) => (
        <BlogPost id={_index} post={posts} />
      ))}
      <div className="icon icon-height" onClick={() => navigate("/tickets")}>
        +
      </div>
    </div>
  );
};

export default BlogPosts;
