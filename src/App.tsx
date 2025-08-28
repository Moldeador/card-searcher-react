import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import type { CardInfo } from "./utils";
import Gallery from "./components/Gallery";
import BigDisplay from "./components/BigDisplay";

function App() {
  const [isLanding, setIsLanding] = useState(true);
  const [cardsInfo, setCardsInfo] = useState<Array<CardInfo>>([]);
  const [selectedCard, setSelectedCard] = useState<CardInfo>();

  function handleSearch(query: string) {
    const url = "https://api.scryfall.com/cards/search?q=";
    const uriComponent = encodeURIComponent(query);
    const responsePormise = fetch(url + uriComponent);
    responsePormise
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const data: Array<CardInfo> = json.data;
        setCardsInfo(data);
        console.log(data);
      });
    setSelectedCard(undefined);
    setIsLanding(false);
  }

  function handleReset() {
    setSelectedCard(undefined);
    setIsLanding(true);
  }

  return (
    <div id="my_app" className="flex flex-col items-center justify-center">
      {isLanding ? (
        <>
          <h1>Card Searcher</h1>
          <SearchBar onSearch={handleSearch} />
        </>
      ) : (
        <span className="flex min-w-full justify-between">
          <h2 className="m-8 cursor-pointer" onClick={handleReset}>
            Card Searcher
          </h2>
          <SearchBar onSearch={handleSearch} />
        </span>
      )}

      {selectedCard && <BigDisplay cardInfo={selectedCard} />}

      {!isLanding && !selectedCard && (
        <Gallery cardsInfo={cardsInfo} setSelectedCard={setSelectedCard} />
      )}
    </div>
  );
}

export default App;
