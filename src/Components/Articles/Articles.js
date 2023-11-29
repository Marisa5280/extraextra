import Card from "../Card/Card";
import "./Articles.css";

function Articles({ articles }) {
  return (
    <div className="articles-container">
      {!!articles.length ? (
        <ArticleCards articles={articles} />
      ) : (
        <h2>No articles found. Try again</h2>
      )}
    </div>
  );
}

function ArticleCards({ articles }) {
  return articles.map((article) => {
    return (
      <Card
        location={article.title}
        description={article.description}
        id={article.id}
        key={article.id}
      />
    );
  });
}

export default Articles;