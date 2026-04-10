import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/helper/scroll-to-top";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roll back to Old Safaricom Apps | My Safaricom & M-Pesa",
  description:
    "If you ended up with the latest app from Safaricom of MyOneApp, let me help you roll back to the old apps.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}