import { Hero } from "@/components/landing/Hero";
import { Servicios } from "@/components/landing/Servicios";
import Image from "next/image";


// En este componente van todos los componentes que quiero colocar en mi LANDING PAGE

export default function Home() {
  return (
    <main>
      <Hero/>
      <Servicios/>


    </main>
  );
}
