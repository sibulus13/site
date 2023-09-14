import "./globals.css";
import NavBar from "../components/generic/NavBar";

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
        </div>
      </body>
    </html>
  );
}
