import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import type { CardInfo } from "@/utils"
import Thumbnail from "./Thumbnail";

export default function Gallery({ cardsInfo, setSelectedCard }: { cardsInfo: Array<CardInfo>, setSelectedCard: (card: CardInfo) => void }) {
    return (
        <>
            <Carousel>
                <CarouselContent>

                    {cardsInfo?.map(function (card: CardInfo) {
                        return <CarouselItem className="basis-1/4">
                            <Thumbnail cardInfo={card} onCardSelect={setSelectedCard} />
                        </CarouselItem>;
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}