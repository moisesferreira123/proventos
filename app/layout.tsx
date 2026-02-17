import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Proventos",
  description: "App de gerenciamento de ativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background`}
      >
        <div className="pl-64">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
