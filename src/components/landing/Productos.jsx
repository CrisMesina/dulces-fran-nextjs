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
        <section className=' min-h-screen bg-[#927869] overflow-hidden' id='productos'>
            
            <div className='relative '>

                <Image src="/images/chispas.png" alt='' height={500} width={500} className='absolute w-150 h-100 -right-50 rotate-45' />
                <Image src="/images/chispas.png" alt='' height={500} width={500} className='absolute w-150 h-100 -left-50' />
                <Image src="/images/chispas.png" alt='' height={500} width={500} className='absolute w-150 h-100 right-150 rotate-200 -top-45' />

            </div>
            <div className='p-15 min-h-screen relative ' >
                
                <h1 className='text-xl text-gold font-mono'>Nuestros Productos</h1>
                <p className='text-4xl text-white mt-4'>Una <span className='text-gold'> pequeña </span> muestra de <span className='text-gold'> nuestros productos </span></p>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-1'>
                    {products.map((p, i) => (
                        <div key={i} className='md:w-90 mx-auto hover:skew-3 hover:shadow-lg transition-all duration-200 group flex flex-col rounded-2xl bg-chocolate shadow-md shadow-white/30 mt-10 h-auto'>
                            <Image src={p.src} className='w-90 rounded-t-2xl' alt={p.name} width={384} height={384}/>
                            <span className='text-center mt-5 text-white'>----------- ❤️ -----------</span>
                            <h1 className='m-5 my-5 font-Caveat text-center text-4xl text-white'>{p.name}</h1>
                            <span className='text-center mb-5 text-white'>----------- ❤️ -----------</span>
                        
                        </div>
                    ))}
                </div>
            </div>
                <div className='flex w-full'>
                    
                    <a 
                        href=""
                        className='mx-auto my-5 border text-white shadow-md shadow-white p-3 rounded-lg text-xl w-35 text-center'>
                        Ver mas
                    </a>


                </div>

        </section>
    )
}
