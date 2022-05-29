import blankAvatar from "../assets/images/blank-avatar.jpg";

const BlogPost = ({ post }) => {
  return (
    <div className="container blog-post">
      <div className="row">
        <div className="col-1 post-image">
          <div className="avatar-container">
            <div className="image-container">
              <img src={post.avatar ? post.avatar : blankAvatar} />
            </div>
          </div>
        </div>
        <div className="col">
          <h5>{post.title}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-1 post-owner">{post.owner}</div>
        <div className="col post-topic">{post.topic}</div>
        <div className="col post-timestamp">{post.timestamp}</div>
      </div>
      <div className="row">
        <div className="col post-message">
          {post.message.substring(0, 150) + "..."}
        </div>
      </div>
      <div className="row">
        <div className="col post-support">{post.support}</div>
        <div className="col post-notification">{post.notification}</div>
        <div className="col post-reply">
          <i class="bi bi-reply"></i>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;


