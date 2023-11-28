import "./App.css";
import { useState, useEffect } from "react";
import mockData from "../../../src/mockData.json";
// import { getSong, getUfoData } from "../../apiCalls";
// import Encounters from "../Encounters/Encounters";
// import Form from "../Form/Form";

function App() {
  const [articles, setArticles] = useState(mockData.articles);

  useEffect(() => {
    // getNewsData().then((newsData) => {
    //   setArticles(newsData);
      return articles;
    // });
    // console.log(articles);
  }, []);

  return (
    <div className="App">
      <header className="App-header">Extra! Extra!</header>
      <p>The Headlines:</p>
      {articles && <Articles articles={articles} />}
    </div>
  );
}

export default App;
