import "./App.scss";
import TopMoive from "./assets/moive.json";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="searchAndFilter">
        <div>
          <input type="text" placeholder="Search" />
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
        {TopMoive.map((movie, index) => (
          <Card
            key={movie.id}
            index = {++index}
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
