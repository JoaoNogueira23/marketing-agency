import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.sass";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
}
)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
