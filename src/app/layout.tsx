import type { Metadata } from "next";
import { Fredoka } from "next/font/google"; // specific cute font
import Script from "next/script";
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
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-RWKQ121HZW" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RWKQ121HZW');
          `}
        </Script>
      </body>
    </html>
  );
}
