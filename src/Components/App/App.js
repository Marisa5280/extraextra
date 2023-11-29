import "./App.css";
import { useState, useEffect } from "react";
import Articles from "../Articles/Articles";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import DetailView from "../DetailView/DetailView";
import { getNewsData } from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState(null);
  const [searchParam, setSearchParam] = useState(null);
  const location = useLocation();

  const defaultUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=93d5868605374b8eb40a271dd9729578";
  const searchUrl = `https://newsapi.org/v2/top-headlines?q=${searchParam}&country=us&apiKey=93d5868605374b8eb40a271dd9729578`;
  const url = searchParam ? searchUrl : defaultUrl;

  useEffect(() => {
    getNewsData(url).then((newsData) => {
      setArticles(newsData.articles);
      console.log("articles", articles);
      return articles;
    });
    console.log(articles);
  }, [searchParam]);

  const handleHomeClick = () => {
    (!location.pathname === '/') && setArticles(null);
    setSearchParam(null)
  }

  return (
    <main className="App">
      <Link className="App-header" to="/" onClick={handleHomeClick} >
        <h1>Extra! Extra!</h1>
      </Link>
      <SearchBar setSearchParam={setSearchParam} setArticles={setArticles} />
      <Routes>
        <Route path="/" element={<Articles articles={articles} />} />
        <Route path="/:date" element={<DetailView articles={articles} />} />
      </Routes>
    </main>
  );
}

export default App;
