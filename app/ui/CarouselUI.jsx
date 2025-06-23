import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import comments_data from "../constants/comments";
import Autoscroll from "embla-carousel-auto-scroll";
export default function CarouselUI() {
  const data = comments_data;
  return (
    <>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoscroll({
            speed: 0.5,
            startDelay: 1000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {data.testimonials.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 basis-1/2">
              <div className="flex flex-col items-center">
                <Image
                  src={item.avatar}
                  alt={""}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="flex flex-col justify-end">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground xl:w-75">
                    {item.text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
