import { Hero } from "@/components/landing/Hero";
import { Productos } from "@/components/landing/Productos";
import Image from "next/image";


// En este componente van todos los componentes que quiero colocar en mi LANDING PAGE

export default function Home() {
  return (
    <main>
      <Hero/>
      <Productos/>


    </main>
  );
}
