import type { CardInfo } from "@/utils";

export default function BigDisplay({ cardInfo }: { cardInfo: CardInfo }) {
  const image_url = cardInfo.image_uris
    ? cardInfo.image_uris.large
    : cardInfo.card_faces
    ? cardInfo.card_faces[0].image_uris.large
    : "";
  return (
    <img className="m-16 rounded-3xl border-8 border-white" src={image_url} />
  );
}
