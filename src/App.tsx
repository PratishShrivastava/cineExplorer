import { useState } from "react";
import "./App.scss";
import TopMoive from "./assets/moive.json";
import Card from "./components/Card";

function App() {
  const [Filter, FilterSet] = useState("");
  return (
    <>
      <div className="searchAndFilter">
        <div>
          <input
            type="text"
            onChange={(evt) => FilterSet(evt.target.value)}
            value={Filter}
            placeholder="Search"
          />
        </div>
        <div>
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
        {TopMoive.filter((movie) =>
          movie.title.toLocaleLowerCase().includes(Filter.toLocaleLowerCase())
        ).map((movie, index) => (
          <Card
            key={movie.id}
            index={++index}
            title={movie.title}
            imageUrl={movie.image}
            rating={movie.rating}
          />
        ))}
      </div>
    </>
  );
}

export default App;
