import "./globals.css";
import NavBar from "../components/generic/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div>
          <NavBar></NavBar>
          <div className="px-4">{children}</div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '黄 | %s',
    default: '黄',
  },
};
