import { Contactanos } from "@/components/landing/Contactanos";
import { Hero } from "@/components/landing/Hero";
import { Nosotros } from "@/components/landing/Nosotros";
import { Productos } from "@/components/landing/Productos";
import Image from "next/image";


// En este componente van todos los componentes que quiero colocar en mi LANDING PAGE

export default function Home() {
  return (
    <main>
      <Hero/>
      <Productos/>
      <Nosotros/>
      <Contactanos/>


    </main>
  );
}
