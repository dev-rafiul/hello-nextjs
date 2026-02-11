import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dev_Story",
  description: "An App for showing developer story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header className="text-lg font-semibold"> */}
        <header className="">
          <Header></Header>
        </header>
        {/* </header> */}
        <main className="mt-5 mx-5">
        {children}
        </main>
      </body>
    </html>
  );
}
