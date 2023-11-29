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
        image={article.urlToImage}
        title={article.title}
        description={article.description}
        date={article.publishedAt}
        source={article.source.name}
        key={article.publishedAt}
      />
    );
  });
}

export default Articles;