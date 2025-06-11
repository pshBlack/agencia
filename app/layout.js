import NavigationBar from "./ui/NavigationBar";
import "./globals.css";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body>
        <div className="">
          <NavigationBar />
          <Separator orientation="horizontal" className="mb-4" />
          {children}
        </div>
      </body>
    </html>
  );
}
