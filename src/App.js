import React from 'react';
import Header from "./components/Header";
import List from "./components/List"

const beers = ["beer1", "beer2", "beer3", "beer42"];
const animals = ["beaver", "cow", "pig", "rat"];

function App() {
  return (
    <div className="App">
        <Header>
        </Header>
        <List items={beers}></List>
        <List items={animals}></List>
    </div>
  );
}

export default App;
