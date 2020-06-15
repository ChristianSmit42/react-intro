import React from 'react';
import Header from "./components/Header";
import List from "./components/List"
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

const beers = ["beer1", "beer2", "beer3", "beer42"];
const animals = ["beaver", "cow", "pig", "rat"];

function App() {
  return (
    <div className="App">
        <Header>Animals and Beer</Header>
        <Main>
            <List items={beers}></List>
            <List items={animals}></List>
        </Main>
        <Footer>made with React</Footer>
    </div>
  );
}

export default App;
