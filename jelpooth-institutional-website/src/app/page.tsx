"use client"
import Card from "./components/card";
import Pages from "./components/Pages"
export default function Home() {
  return (
    <Pages>
      <section className="bg-red-500 w-screen h-screen">

      </section>
      <section className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <Card/>
      </section>
      <section className="bg-green-500 w-screen h-screen">

      </section>
    </Pages>
  );
}
