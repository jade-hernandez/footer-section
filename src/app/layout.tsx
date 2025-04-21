import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "../styles/global.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Footer Section Component",
  description: "A simple footer section component built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={noto.className}>{children}</body>
    </html>
  );
}
