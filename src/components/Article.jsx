import { Link } from "react-router-dom";
const blankImage = "https://source.unsplash.com/random/75x75?sig=1";

const Article = ({ article }) => {
  return (
    <div className="container article news-article">
      <Link to={article.link} id="link">
        <div className="container">
          <div className="row">{article.title}</div>
          <div className="row">
            <div className="col-2">
              <img src={article.image ? article.image : blankImage} />
            </div>
            <div className="col">
              <div className="row">{article.description}</div>
              <div className="row">
                <div className="col">{article.publisher}</div>
                <div className="col">{article.timestamp}</div>
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
