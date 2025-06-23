import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
export function MobileBar() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="mt-1.5 size-10 cursor-pointer ml-2.5" />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col items-center max-w-[48%]"
          side="left"
        >
          <SheetHeader className="text-3xl gap-10">
            <SheetTitle className="mt-10">
              <SheetClose asChild>
                <Link href="/">Головна</Link>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="">
              <SheetClose asChild>
                <Link href="/sell">Оформити заявку</Link>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="">
              <SheetClose asChild>
                <Link href="/about-company">Про компанію</Link>
              </SheetClose>
            </SheetTitle>
            <SheetTitle className="">
              <SheetClose asChild>
                <Link href="/comments">Відгуки</Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
