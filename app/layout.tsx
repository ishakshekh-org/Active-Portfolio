import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ishak's Portfolio",
  description: "Welcome To Ishak's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-black text-white relative "}>
        <div className="fixed -top-20 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className="sm:px-20 px-10 relative">
          <Header />
          <div className="sm:mt-32 mt-20">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
