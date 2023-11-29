import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ setSearchParam, setArticles }) {
  const [search, setSearch] = useState(null);

  const handleSubmit = () => {
    setSearchParam(search);
    setArticles(null);
  };

  return (
    <div className="search-bar-box">
      <input onChange={(event) => setSearch(event.target.value)} />
      <button className="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
