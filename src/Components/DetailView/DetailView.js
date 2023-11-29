import { useParams } from "react-router-dom";

function DetailView({ articles }) {
  const articleDate = useParams().date;

  const selectedArticle = articles.find(
    (article) => article.publishedAt === articleDate
  );

  return (
    <div className="detail-container">
      <h2 className="detail-headline">{selectedArticle.title}</h2>
      <img className="detail-image" src={selectedArticle.urlToImage}></img>
      <p className="detail-publish">
        published: {selectedArticle.publishedAt}, by:{" "}
        {selectedArticle.source.name}
      </p>
      <p className="detail-content">{selectedArticle.content}</p>
      <a href={`${selectedArticle.url}`}>
        Navigate to {selectedArticle.source.name} to continue reading
      </a>
    </div>
  );
}

export default DetailView;
