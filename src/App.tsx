import "./App.scss";
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
            <option selected value="Select">Select</option>
            <option value="moive">moive</option>
            <option value="series">series</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
