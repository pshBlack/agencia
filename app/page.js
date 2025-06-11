import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center translate-y-30">
      <h1 className="font-bold text-7xl">
        Агенство нерухомості <br />
        <span className="flex justify-center bg-clip-text text-transparent py-5 bg-linear-to-r from-green-400 to-sky-400">
          CoolAgency
        </span>
      </h1>
    </div>
  );
}
