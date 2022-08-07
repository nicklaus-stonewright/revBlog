import { Link } from "react-router-dom";
const blankImage = "https://source.unsplash.com/random/75x75?sig=1";

const Article = ({ article }) => {
  return (
    <div className="container article news-article">
      <Link to={article.url} id="link">
        <div className="container">
          <div className="row">{article.title}</div>
          <div className="row">
            <div className="col-2 image-container">
              <img
                src={article.image ? article.image : blankImage}
                alt={article.source}
              />
            </div>
            <div className="col">
              <div className="row article-description">
                {article.description}
              </div>
              <div className="row">
                <div className="col">{article.source}</div>
                <div className="col">
                  {article.published_at.substring(0, 10)} &nbsp;&nbsp;
                  {article.published_at.substring(11, 16)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Article;

// {
//   title: "focused on mistakes",
//   description: "they kept  I did",
//   publisher: "ITV",
//   image: "./assets/images/owsama-hat.jpg",
//   timestamp: "2022-03-11T07:36:17+0000",
//   link: "/#",
// },
