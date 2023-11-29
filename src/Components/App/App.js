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
      <header className="App-header">
        <h1>Extra! Extra!</h1>
      </header>
      <h2>The Headlines:</h2>
      {articles && <Articles articles={articles} />}
    </div>
  );
}

export default App;
