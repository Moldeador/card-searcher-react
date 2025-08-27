import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import type { CardInfo } from './utils'
import Thumbnail from './components/Thumbnail'



function App() {
  const [cardsInfo, setCardsInfo] = useState<Array<CardInfo>>();
  const [selectedCard, setSelectedCard] = useState<CardInfo>();

  function handleSearch(query: string) {
    const url = "https://api.scryfall.com/cards/search?q=";
    const uriComponent = encodeURIComponent(query);
    const responsePormise = fetch(url + uriComponent);
    responsePormise.then(function (response) {
      return response.json();
    }).then(function (json) {
      const data: Array<CardInfo> = json.data;
      setCardsInfo(data);
      console.log(data);
    })
    setSelectedCard(undefined);
  }
  return (
    <>
      <h1>Card Searcher</h1>
      {selectedCard ? (selectedCard.image_uris ? <img src={selectedCard.image_uris.normal} /> : (selectedCard.card_faces ? <img src={selectedCard.card_faces[0].image_uris.normal} /> : undefined)) : undefined}

      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      {!selectedCard && <div>
        <ul>
          {cardsInfo?.map(function (card: CardInfo) {
            return <li key={card.name}>
              <Thumbnail cardInfo={card} onCardSelect={setSelectedCard} />

            </li>;
          })}
        </ul>
      </div>}
    </>
  )
}

export default App
