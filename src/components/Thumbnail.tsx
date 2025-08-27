import type { CardInfo } from "../utils";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Thumbnail({
  cardInfo,
  onCardSelect,
}: {
  cardInfo: CardInfo;
  onCardSelect: (card: CardInfo) => void;
}) {
  function handleClick() {
    onCardSelect(cardInfo);
  }

  const image_url = cardInfo.image_uris
    ? cardInfo.image_uris.small
    : cardInfo.card_faces
    ? cardInfo.card_faces[0].image_uris.small
    : "";

  return (
    <div onClick={handleClick}>
      <Card>
        <CardHeader>
          <CardDescription className="flex justify-center h-[3EM]">
            {cardInfo.name}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <img
            className="m-2 rounded-md border-1 border-white"
            src={image_url}
          />
        </CardContent>
      </Card>
    </div>
  );
}
