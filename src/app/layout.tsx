"use client"
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { PrimeReactProvider } from 'primereact/api';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body className="dark:text-white text-black dark:bg-gray-900 w-full" cz-shortcut-listen="true">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
