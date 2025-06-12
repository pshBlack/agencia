"use client";
import { Button } from "@/components/ui/button";
import "./page.css";
import { useRouter } from "next/navigation";
import { ArrowRight, Trophy, MessageCircle, House, Zap } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";
import CarouselUI from "./ui/CarouselUI";

const style = {
  backgroundImage:
    "linear-gradient(260deg,rgba(73, 199, 252, 1) 42%, rgba(43, 255, 89, 1) 76%)  ",
  backgroundSize: "200% 200%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  animation: "Gradient 15s ease infinite",
};

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contacts");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center my-20 md:my-40 gap-2 px-4">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          Агенство нерухомості
          <span
            className="flex justify-center text-transparent py-5"
            style={style}
          >
            CoolAgency
          </span>
        </h1>
        <Button
          className="text-lg md:text-xl cursor-pointer bg-green-300 mt-5 py-5 px-6"
          size="lg"
          variant="outline"
          onClick={handleClick}
        >
          Купити квартиру
          <ArrowRight className="ml-2" />
        </Button>
      </div>

      {/* Description Section */}
      <div className="flex justify-center items-center flex-col px-4 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Ваш запит - наша дія
        </h2>
        <div className="text-sm md:text-md mt-6 text-center max-w-2xl">
          <span className="block">
            Агенти CoolAgency підбируть нерухомість, що відповідає вашим
            вимогам,
          </span>
          <span className="block mb-10">
            беручи всі клопоти на <b>себе</b>.
          </span>
        </div>
      </div>

      {/* Cards Grid - Адаптивний */}
      <div className="px-4 md:px-8 lg:px-12">
        {/* Desktop Grid (lg екрани і більше) */}
        <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[auto_1fr] gap-4 min-h-[520px]">
          <Card className="row-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl xl:text-2xl font-bold">
                <Trophy className="size-8 xl:size-10" />
                Лідер серед агенцій у місті Івано-Франківськ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/city.jpeg"
                alt="Івано-Франківськ"
                width={1000}
                height={1000}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl xl:text-2xl font-bold">
                <MessageCircle className="size-8 xl:size-10" />
                +200 відгуків
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base xl:text-lg">
                Максимально високий рейтинг – 5.0, що базується на основі більш
                ніж 200 відгуків на Google maps
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl xl:text-2xl font-bold">
                <House className="size-8 xl:size-10" />
                Повна база нерухомості
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-base xl:text-lg">
                База даних містить понад 95% обʼєктів нерухомості різних типів в
                місті Івано-Франківськ
              </p>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl xl:text-2xl font-bold">
                <Zap className="size-8 xl:size-10" />
                Швидкий фідбек
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-base xl:text-lg">
                Після оформлення заявки ви отримаєте відповідь якнайшвидше, де
                ми зможемо запропонувати підходящу нерухомість
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tablet Grid (md-lg екрани) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold">
                <Trophy className="size-8" />
                Лідер серед агенцій у місті Івано-Франківськ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/city.jpeg"
                alt="Івано-Франківськ"
                width={1000}
                height={600}
                className="rounded-xl shadow-xl w-full h-[300px] object-cover"
              />
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold">
                <MessageCircle className="size-8" />
                +200 відгуків
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base">
                Максимально високий рейтинг – 5.0, що базується на основі більш
                ніж 200 відгуків на Google maps
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <House className="size-7" />
                Повна база нерухомості
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                База даних містить понад 95% обʼєктів нерухомості різних типів в
                місті Івано-Франківськ
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <Zap className="size-7" />
                Швидкий фідбек
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Після оформлення заявки ви отримаєте відповідь якнайшвидше, де
                ми зможемо запропонувати підходящу нерухомість
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Grid (sm екрани і менше) */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <Trophy className="size-7" />
                Лідер серед агенцій у місті Івано-Франківськ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/city.jpeg"
                alt="Івано-Франківськ"
                width={1000}
                height={600}
                className="rounded-xl shadow-xl w-full h-[200px] object-cover"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <MessageCircle className="size-7" />
                +200 відгуків
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Максимально високий рейтинг – 5.0, що базується на основі більш
                ніж 200 відгуків на Google maps
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <House className="size-7" />
                Повна база нерухомості
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                База даних містить понад 95% обʼєктів нерухомості різних типів в
                місті Івано-Франківськ
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg font-bold">
                <Zap className="size-7" />
                Швидкий фідбек
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Після оформлення заявки ви отримаєте відповідь якнайшвидше, де
                ми зможемо запропонувати підходящу нерухомість
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col mt-15 justify-center items-center">
        <span className="md:text-4xl text-3xl font-bold mb-2">Відгуки:</span>
        <p className="md:text-md text-sm">
          Подивіться, що про нас думають інші!
        </p>
      </div>
      <div className="my-20 flex justify-center w-full">
        <CarouselUI className="" />
      </div>
    </div>
  );
}
