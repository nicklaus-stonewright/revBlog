import Article from "../components/Article";

const LatestNews = () => {
  const newsArticlesCollection = [
    {
      title: "review was focused on finding mistakes",
      description: "they kept trying to find mistakes in everything I did",
      publisher: "France24",
      image: "https://source.unsplash.com/random/75x75?sig=1",
      timestamp: "2022-02-11T07:36:17+0000",
      link: "/#",
    },
    {
      title: "finding mistakes",
      description: " in everything I did",
      publisher: "BBC News",
      image: "https://source.unsplash.com/random/75x75?sig=2",
      timestamp: "2022-02-15T07:36:17+0000",
      link: "/#",
    },
    {
      title: "focused on mistakes",
      description: "they kept  I did",
      publisher: "ITV",
      image: "https://source.unsplash.com/random/75x75?sig=3",
      timestamp: "2022-03-11T07:36:17+0000",
      link: "/#",
    },
  ];

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      {newsArticlesCollection.map((article, _index) => (
        <Article id={_index} article={article} />
      ))}
    </div>
  );
};

export default LatestNews;
