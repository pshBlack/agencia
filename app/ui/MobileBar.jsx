import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
export function MobileBar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="mt-1.5 size-10 cursor-pointer ml-2.5" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center max-w-[48%]">
          <SheetHeader className="text-3xl gap-10">
            <SheetTitle className="mt-10">
              <Link href="/">Головна</Link>
            </SheetTitle>
            <SheetTitle className="">
              <Link href="/sell">Купити квартиру</Link>
            </SheetTitle>
            <SheetTitle className="">
              <Link href="/about-company">Про компанію</Link>
            </SheetTitle>
            <SheetTitle className="">
              <Link href="/contacts">Контакти</Link>
            </SheetTitle>
            <SheetTitle className="">
              <Link href="/comments">Відгуки</Link>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
