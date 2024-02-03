import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/store-provider";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tiktok Shop",
  description: "a shop app to manage expenses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${quicksand.className} auth_page`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
