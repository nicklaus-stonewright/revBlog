import { Link } from "react-router-dom";
import blankAvatar from "../assets/images/blankAvatar.jpg";

const BlogPost = ({ post }) => {
  let flagColor;
  const getFlagColor = (nature) => {
    switch (nature) {
      case "positive":
        flagColor = `green`;
        break;
      case "negative":
        flagColor = `red`;
        break;
      default:
        flagColor = `grey`;
    }
    return flagColor;
  };

  return (
    <div className="container blog-post">
      <div className="row">
        <div className="col-1 post-image">
          <div className="avatar-container post-element">
            <div className="image-container">
              <img src={post.avatar ? post.avatar : blankAvatar} alt="" />
            </div>
          </div>
        </div>
        <div className="col post-element">
          <span
            className="postNatureFlag"
            style={{ color: getFlagColor(post.nature) }}
          >
            ⚑&nbsp;
          </span>
          <h5>{post.title}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-1 post-owner post-element">{post.owner}</div>
        <div className="col post-topic post-element">{post.topic}</div>
        <div className="col post-timestamp post-element">{post.timestamp}</div>
      </div>
      <div className="row">
        <div className="col post-description post-element">
          {post.description.substring(0, 150) + "..."}
        </div>
      </div>
      <div className="row interaction-row">
        <div className="col post-support post-element">
          <Link to={`/editpost/${post.documentId}`} id="link">
            ✎
          </Link>
        </div>

        <div className="col post-support post-element">{post.support}</div>
        <div className="col post-notification post-element">
          {post.notification}
        </div>
        <div className="col post-reply post-element">
          <i className="bi bi-reply"></i>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
