import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function CarouselUI() {
  return (
    <>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/room1.png"
              alt="1"
              width={1000}
              height={1000}
              className=""
            ></Image>
            <Button>Купити квартиру</Button>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
