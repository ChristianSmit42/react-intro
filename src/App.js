import React from 'react';
import Header from "./components/Header";
import List from "./components/List"
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

const beers = ["beer1", "beer2", "beer3", "beer42"];
const animals = ["beaver", "cow", "pig", "rat"];

function App() {

    const [itemsToDisplay, setItemsToDisplay] = React.useState(beers);
    function handleClicks(){
        setItemsToDisplay(animals);
    }
    return (
        <div className="App">
            <Header>Animals and Beer</Header>
            <Main>
                <button onClick={handleClicks}>change items</button>
                <List items={itemsToDisplay}/>
            </Main>
            <Footer>made with React</Footer>
        </div>
    );
}

export default App;
