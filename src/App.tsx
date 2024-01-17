import { useState } from "react";
import "./App.scss";
import TopMoive from "./assets/moive.json";
import Card from "./components/Card";

function App() {
  // search case starts
  const [Filter, FilterSet] = useState("");

  const filteredMovies = TopMoive.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(Filter.toLocaleLowerCase())
  );
  // search case ends

  return (
    <>
      <div className="searchAndFilter">
        <div className="searchField">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="text"
            onChange={(evt) => FilterSet(evt.target.value)}
            value={Filter}
            placeholder="Search"
          />
        </div>
        <div style={{ display: "none" }}>
          <select name="" id="">
            <option selected value="Select">
              Select
            </option>
            <option value="moive">moive</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>
      <div className="cards">
        {filteredMovies.length === 0 ? (
          <abbr title="No movies found.">
            <p className="errormsg">Film search got a timeout.</p>
          </abbr>
        ) : (
          filteredMovies.map((movie, index) => (
            <Card
              key={movie.id}
              index={++index}
              title={movie.title}
              imageUrl={movie.image}
              rating={movie.rating}
              imdbLink={movie.imdb_link}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
