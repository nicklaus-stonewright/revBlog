import blankAvatar from "../assets/images/blankAvatar.jpg";

const BlogPost = ({ post }) => {
  return (
    <div className="container blog-post">
      <div className="row">
        <div className="col-1 post-image">
          <div className="avatar-container post-element">
            <div className="image-container">
              <img src={post.avatar ? post.avatar : blankAvatar} />
            </div>
          </div>
        </div>
        <div className="col post-element">
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
        <div className="col post-support post-element">{post.support}</div>
        <div className="col post-notification post-element">
          {post.notification}
        </div>
        <div className="col post-reply post-element">
          <i class="bi bi-reply"></i>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
