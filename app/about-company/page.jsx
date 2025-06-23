import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowRight,
  Trophy,
  MessageCircle,
  House,
  Zap,
  ChartColumnBig,
} from "lucide-react";
import ChartUI from "../ui/ChartUI";
export default function AboutCompany() {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-10">
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
              Після оформлення заявки ви отримаєте відповідь якнайшвидше, де ми
              зможемо запропонувати підходящу нерухомість
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
              Після оформлення заявки ви отримаєте відповідь якнайшвидше, де ми
              зможемо запропонувати підходящу нерухомість
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
              Після оформлення заявки ви отримаєте відповідь якнайшвидше, де ми
              зможемо запропонувати підходящу нерухомість
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="flex items-center justify-start gap-3 text-2xl font-bold">
            <ChartColumnBig className="size-7" />
            Статистика успішності наших угод
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ChartUI />
        </CardContent>
      </Card>
    </div>
  );
}
