import React from 'react'
import Image from 'next/image'

export const Productos = () => {

    const products = [
        {
            id: 1,
            name: 'Donitas',
            src: "/images/Donitas.webp"
        },
        {
            id: 1,
            name: 'Donas',
            src: "/images/Donas.webp"
        },
        {
            id: 1,
            name: 'Frasco de dulces Grande',
            src: "/images/Frasco_dulces_grande.webp"
        },
        {
            id: 1,
            name: 'Frasco de dulces Menor',
            src: "/images/Frasco_dulces_menor.webp"
        },
        {
            id: 1,
            name: 'Cuchuflis sin Chocolate',
            src: "/images/Cuchuflis-sin-Chocolate.webp"
        },
        {
            id: 1,
            name: 'Cuchuflis con Chocolate',
            src: "/images/Cuchuflis-con-chocolate.webp"
        }
    ]

    return (
        <section className='min-h-screen bg-espresso' id='productos'>
        
            <div className='p-15 min-h-screen'>
                <h1 className='text-2xl text-gold font-mono'>Nuestros Productos</h1>
                <p className='text-4xl text-white mt-4'>Una <span className='text-pink-500'> pequeña </span> muestra de <span className='text-pink-500'> nuestros productos </span></p>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-1'>
                    {products.map((p, i) => (
                        <div key={i} className='md:w-90 mx-auto flex flex-col rounded-2xl bg-espresso shadow-lg shadow-white/30 mt-10 h-auto'>
                            <Image src={p.src} className='w-90 border-b-8 border-white rounded-t-2xl' alt={p.name} width={384} height={384}/>
                            <h1 className='m-5 my-5 font-Caveat text-4xl text-white'>{p.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
                <div className='flex w-full'>
                    
                    <a 
                        href=""
                        className='mx-auto my-10 border text-white shadow-lg shadow-white p-5 rounded-lg text-xl w-50 text-center'>
                        Ver mas
                    </a>


                </div>

        </section>
    )
}
