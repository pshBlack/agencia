import { Button } from "@/components/ui/button";
import "./page.css";
const style = {
  backgroundImage:
    "linear-gradient(260deg,rgba(73, 199, 252, 1) 42%, rgba(43, 255, 89, 1) 76%)  ",
  backgroundSize: "200% 200%", // ⭐ Ключевой момент! Делаем градиент больше элемента
  backgroundClip: "text",
  WebkitBackgroundClip: "text", // Для Safari
  animation: "Gradient 15s ease infinite",
};

export default function Home() {
  return (
    <div className="flex justify-center translate-y-30">
      <h1 className="font-bold sm:text-5xl md:text-6xl xl:text-7xl text-3xl">
        Агенство нерухомості <br />
        <span
          className="flex justify-center text-transparent py-5"
          style={style}
        >
          CoolAgency
        </span>
      </h1>
    </div>
  );
}
