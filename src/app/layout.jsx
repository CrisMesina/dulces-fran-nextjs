
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Dulces Fran",
  description: "Dulces Fran es un emprendimiento especializado en la fabricación y venta de dulces artesanales. Principalmente trabajando con ingredientes naturales y de alta calidad.",
};
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  
  

  return (
    <html
      lang="es"
    >
      <head>
        <meta name="keywords" content="Dulces Fran, dulcesfran, @dulcesfran, dulces artesanales, 
          dulces de calidad, dulces caseros, dulces para eventos, dulces para regalar, 
          dulces naturales, dulces personalizados, dulces para fiestas, 
          dulces para cumpleaños, dulces para bodas, dulces para baby shower, dulces para navidad, 
          dulces para halloween, dulces para san valentín, dulces para pascua, dulces para día de la madre, dulces para día del padre,
          dulces para día del niño, dulces para día de los enamorados, dulces para día de la amistad,
          dulces para día de la mujer, dulces para día del abuelo, dulces para día del maestro, dulces para día del padre, dulces para día del trabajador, 
          dulces para día de la independencia, dulces para día de la bandera,
          dulces doñihue, dulces en almendro, dulces en coinco, dulces en coltauco, dulces en loreto, dulces en parral"
        /> 
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Dulces Fran"/>
        <meta property="og:url" content="https://dulcesfran.cl"/>
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
      </head>

      <body className="min-h-full flex flex-col">
          
        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  );
}
