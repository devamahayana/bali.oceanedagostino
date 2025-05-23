import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Asap } from "next/font/google";
import BaliseCode from "@/components/BaliseCode";

export const metadata: Metadata = {
  title: "Oceanedagostino",
  description: "Investment in Bali",
};

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-poppins"
});
const asapFont = Asap({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-asap"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppinsFont.className} ${asapFont.className}`}>
      <head>
        <BaliseCode />
      </head>
      <body>        
        {children}
      </body>
    </html>
  );
}
