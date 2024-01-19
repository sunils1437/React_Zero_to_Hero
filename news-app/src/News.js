export default function News(props) {
  return (
    <section className="news">
      <div className="newsImg">
        <img src={props.article.urlToImage} alt="News Img" />
      </div>
      <h3>{props.article.title}</h3>
      <p>{props.article.description?.substring(0,100).concat(".... ")}<a href={props.article.url} target="_blank" rel="noreferrer">Read More</a></p>
      <div className="newsSource">
        <p>Author: {props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </section>
  );
}
