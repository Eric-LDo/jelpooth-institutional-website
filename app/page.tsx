"use client";
import Caroucel from "./components/Caroucel";
import Pages from "./components/Pages";
import FirstTitle from "./components/FirstTitle";
import MainServicesSection from "@/app/components/home_components/MainServicesSection";
import MainFrameworkSection from "@/app/components/home_components/MainFrameworkSection";
export default function Home() {
  return (
    <Pages>
      <section>
        <FirstTitle>
          <Caroucel />
        </FirstTitle>
      </section>
      
      <section>
        <MainServicesSection />
      </section>

      <section>
        <MainFrameworkSection />
      </section>
    </Pages>
  );
}
