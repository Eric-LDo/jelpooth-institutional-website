"use client"
import "./globals.css";
import Header from "./components/Header"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="dark:text-white text-black "
      cz-shortcut-listen="true">
        <Header/>
        {children}
      </body>
    </html>
  );
}
