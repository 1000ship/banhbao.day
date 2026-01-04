import type { Metadata } from "next";
import { Fredoka } from "next/font/google"; // specific cute font
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Banh Bao Day! 🥟",
  description: "Celebrating the fluffiest Vietnamese street snack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
