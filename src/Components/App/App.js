import "./App.css";
import { useState, useEffect } from "react";
import mockData from "../../../src/mockData.json";
import Articles from "../Articles/Articles";
import { Link, Route, Routes } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import DetailView from "../DetailView/DetailView";
// import { getNewsData } from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState(mockData.articles);
  const [searchParam, setSearchParam] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  console.log("searchParam", searchParam);
  // useEffect(() => {
  //   getNewsData().then((newsData) => {
  //     setArticles(newsData);
  //     return articles;
  //   });
  //   console.log(articles);
  // }, []);

  return (
    <main className="App">
      <Link className="App-header" to='/' >
        <h1>Extra! Extra!</h1>
      </Link>
      <SearchBar setSearchParam={setSearchParam} />
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path="/:date" element={<DetailView articles={articles} />} />
      </Routes>
    </main>
  );
}

export default App;
