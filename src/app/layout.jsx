
import "./globals.css";
import Script from "next/script";
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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W4DS5GPH');`,
          }}
        />
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
          
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4DS5GPH" 
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
