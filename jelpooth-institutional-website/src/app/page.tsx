import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="font-sans">
      <section className="bg-red-500 w-screen h-screen">

      </section>
      <section className="bg-blue-500 w-screen h-screen flex justify-center items-center">
        <Card/>
      </section>
      <section className="bg-green-500 w-screen h-screen">

      </section>
    </div>
  );
}
