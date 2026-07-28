import Image from "next/image"
export const Hero = () => {


    const information = [
        {
            id: 1,
            title: "Hecho con amor",
            path: "/images/dona.svg"
        },
        {
            id: 2,
            title: "Ingredientes de calidad",
            path: "/images/calidad.svg"
        },
        {
            id: 3,
            title: "Pedidos personalizados",
            path: "/images/custom.svg"
        },
        {
            id: 4,
            title: "Envio a domicilio (Proximamente)",
            path: "/images/domicilio.svg"
        }
    ]

    return (
        <section className='relative bg-hero min-h-screen flex items-center'>
            <div className='absolute inset-0 z-0 bg-espresso/70 pointer-events-none'></div>

            <div className='relative z-10 flex flex-col md:max-w-xl font-Caveat text-white'>
                <h1 className='ml-2 text-6xl w-80 md:w-auto md:ml-30 md:text-9xl xl:text-7xl 2xl:text-9xl flex-col leading-[1.1]'>Dulces <span className="text-pink-500"> Únicos </span> y <span className="text-pink-500"> Creatividad </span></h1>
                <p className='ml-2 md:ml-30 w-72 md:w-lg text-xl md:text-2xl mt-5 leading-[1.2]'>
                    Cada pieza está 
                    <span className='text-pink-500'> creada con amor </span> 
                    para hacer tus 
                    <span className='text-pink-500'> momentos más especiales. </span>
                </p>
                <div className='flex flex-row md:ml-20 mt-5 text-2xl md:w-xl '>
                    <a href="#xd" className='m-3 p-6 bg-espresso mx-2 py-2 md:py-6 md:mx-auto shadow-lg shadow-espresso rounded-lg 
                        hover:shadow-fuchsia-900 hover:translate-y-0.5
                        transition-all duration-300 will-change-auto w-35 md:w-auto text-lg md:text-2xl '>
                        Ver nuestros Productos
                    </a>
                    <a 
                        href="https://wa.me/56995629153?text=Hola%20Dulces%20Fran!%20Estoy%20interesado%20en%20sus%20productos." 
                        className='m-3 p-6 bg-espresso mx-2 py-2 md:py-6 md:mx-auto shadow-lg shadow-espresso rounded-lg 
                        hover:shadow-fuchsia-900 hover:translate-y-0.5
                        transition-all duration-300 will-change-auto w-35 md:w-auto text-lg md:text-2xl '>
                        Realizar un pedido
                    </a>
                </div>
            </div>

            <div className="absolute w-full bottom-0 bg-espresso/50 h-50 md:h-40">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        information.map((inf, i) => (
                        <div key={i} className="flex flex-col items-center justify-center">
                            <Image width={10} height={10} src={inf.path} alt={inf.title} className="w-10 h-10 mt-2 md:w-20 md:h-20" />
                            <h1 className="text-white text-center font-bold font-Caveat text-xl mt-1">{inf.title}</h1>
                        
                        </div>  
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
