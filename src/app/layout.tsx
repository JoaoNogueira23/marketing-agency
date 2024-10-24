import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.sass";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
}
)

export const metadata: Metadata = {
  title: "Marketing Agency",
  description: "Web Site Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={roboto.className}>
            <main>
              {children}
            </main>
        </body>
    </html>
  );
}
