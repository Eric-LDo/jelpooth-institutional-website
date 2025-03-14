"use client"
import Caroucel from "./components/Caroucel";
import Pages from "./components/Pages";
import FirstTitle from './components/FirstTitle'
export default function Home() {
  return (
    <Pages>
      <section>
        <FirstTitle>
          <Caroucel/>
        </FirstTitle>
      </section>
    </Pages>
  );
}
