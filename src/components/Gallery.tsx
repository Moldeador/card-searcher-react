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
        <div className="w-3/4 grow flex flex-col justify-center">
            <Carousel>
                <CarouselContent>

                    {cardsInfo?.map(function (card: CardInfo) {
                        return <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Thumbnail cardInfo={card} onCardSelect={setSelectedCard} />
                        </CarouselItem>;
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}