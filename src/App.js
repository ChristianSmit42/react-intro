import React from 'react';
import Header from "./components/Header";
import List from "./components/List"
import Food from "./components/food";

const beers = ["beer1", "beer2", "beer3", "beer42"];
const animals = ["beaver", "cow", "pig", "rat"];

function App() {
  return (
    <div className="App">
        <Header>Animals and Beer</Header>
        <List items={beers}></List>
        <List items={animals}></List>
        <Food className={"none"}>Kirsche</Food>
    </div>
  );
}

export default App;
