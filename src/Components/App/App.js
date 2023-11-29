import "./App.css";
import { useState, useEffect } from "react";
import mockData from "../../../src/mockData.json";
import Articles from "../Articles/Articles";
// import { getNewsData } from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState(mockData.articles);

  // useEffect(() => {
  //   getNewsData().then((newsData) => {
  //     setArticles(newsData);
  //     return articles;
  //   });
  //   console.log(articles);
  // }, []);

  return (
    <div className="App">
      <header className="App-header">Extra! Extra!</header>
      <p>The Headlines:</p>
      {articles && <Articles articles={articles} />}
    </div>
  );
}

export default App;
