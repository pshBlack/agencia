import NavigationBar from "./ui/NavigationBar";
import { MobileBar } from "./ui/MobileBar";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import FooterBar from "./ui/FooterBar";

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="">
          {/* Десктопная навигация - скрывается на мобильных */}
          <div className="hidden md:block bg-[#E5E1DA]">
            <NavigationBar />
          </div>

          {/* Мобильная навигация - показывается только на мобильных */}
          <div className="block md:hidden bg-[#E5E1DA]">
            <MobileBar />
          </div>
          <Separator orientation="horizontal" className="mb-4 bg-black" />
          {children}
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
