import type { CardInfo } from "../utils";

export default function Thumbnail({ cardInfo, onCardSelect }: { cardInfo: CardInfo, onCardSelect: (card: CardInfo) => void }) {
    function handleClick() {
        onCardSelect(cardInfo);
    }
    return (
        <div className="card" onClick={handleClick}>
            {cardInfo.image_uris ? <img src={cardInfo.image_uris.small} /> : (cardInfo.card_faces ? <img src={cardInfo.card_faces[0].image_uris.small} /> : undefined)}
            <p> {cardInfo.name}</p>
        </div>
    )

}