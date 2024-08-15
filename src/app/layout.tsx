import { BottomNav } from "@/components/ui/BottomNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salah App",
  description: "Track your daily prayers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <BottomNav />
        </main>
        </body>
    </html>
  );
}
