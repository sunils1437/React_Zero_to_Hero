import News from "./News";
import { useEffect, useState } from "react";

const NewsSection = ({ sharedData }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${sharedData}&from=2024-01-18&apiKey=167b16e3f0ba4f2d9ce5dfff5a251861`
    )
      .then((response) => response.json())
      .then((news) => { 
        setArticles(news.articles);
        console.log(sharedData)
      });
  }, [sharedData]);
  return (
    <main className="newsSection uniPadding">
      <h2 className="heading">Latest News</h2>
      <section className="newsContainer">
        {articles?.map((article) => {
          return <News article={article} />;
        })}
      </section>
    </main>
  );
};
export default NewsSection;
