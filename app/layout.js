import { Inter, Rye } from "next/font/google";
import "./globals.css";

const rye = Rye({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "SpongeBase",
  description: "The Sponge on Base",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rye.className} bg-[#FDFF75] overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}
