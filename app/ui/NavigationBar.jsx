"use client";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavigationBar() {
  const path = usePathname();
  return (
    <>
      <NavigationMenu viewport={true} className="bg-[#E5E1DA]">
        <NavigationMenuList className={"gap-8"}>
          <NavigationMenuItem
            className={path === "/" ? "bg-green-300 rounded-2xl" : "rounded-xl"}
          >
            <NavigationMenuLink asChild>
              <Link href="/">Головна</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={
              path === "/sell" ? "bg-green-300 rounded-2xl" : "rounded-xl"
            }
          >
            <NavigationMenuLink asChild>
              <Link href="/sell">Купити квартиру</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={
              path === "/about-company"
                ? "bg-green-300 rounded-2xl"
                : "rounded-2xl"
            }
          >
            <NavigationMenuLink asChild>
              <Link href="/about-company">Про компанію</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={
              path === "/contacts" ? "bg-green-300 rounded-2xl" : "rounded-xl"
            }
          >
            <NavigationMenuLink asChild>
              <Link href="/contacts">Контакти</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={
              path === "/comments" ? "bg-green-300 rounded-2xl" : "rounded-xl"
            }
          >
            <NavigationMenuLink asChild>
              <Link href="/comments">Відгуки</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
