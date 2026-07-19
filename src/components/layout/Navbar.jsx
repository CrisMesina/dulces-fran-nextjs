"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'




export const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
  


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll);
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  })

    const navegador = [
        {
            label: "Inicio",
            href:"/"
        },
        {
            label: "Servicios",
            href:"#servicios"
        },
        {
            label: "Nosotros",
            href:"#nosotros"
        },
        {
            label: "Contacto",
            href:"#contacto"
        },
        
    ]

    return (
        <>
            <header className={`fixed top-0 z-9999999 text-white w-full ${scrolled ? 'backdrop-blur-2xl bg-espresso/80 shadow-lg' : ''}`}>
                <div className='max-w-7xl mx-auto px-6 flex items-center justify-between py-4'>
                    <a href="#inicio" className='flex items-center gap-3 group'>
                        {/* Logo y nombre de empresa */}
                        <Image src="/images/logo.png" alt='Dulces Fran Logo' width={120} height={56} />
                        <div className='flex flex-col'>
                            <span className=' text-[9px] '>
                                DULCES MOMENTOS
                            </span>
                            <span className='font-bold text-lg uppercase tracking-normal mt-1'
                            >
                                DULCES FRAN
                            </span>
                        </div>
                    </a>
                    <nav className='hidden md:flex items-center gap-8'>
                        {/* Links de navegacion */}
                        {navegador.map((n, i) => (
                            <a 
                                href={n.href} 
                                key={i}
                                className='text-md uppercase tracking-normal transition-all duration-300 relative py-2 
                                    after:absolute 
                                    after:bottom-0 
                                    after:left-0 
                                    after:w-0 
                                    after:h-px 
                                    after:bg-buttons 
                                    after:transition-all 
                                    hover:after:w-full hover:text-pink-500 '
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>
                    <div className='hidden md:flex items-center gap-6'>
                        <div className='flex items-center gap-3'>
                            {/* Icono de instagram */}
                            <a 
                                title='Ir a Instagram de Dulces Fran'
                                href="https://www.instagram.com/dulcesfran._/"
                                target='_blank'
                            >
                                <svg
                                    className="w-12 h-12 text-white p-1 transition-all duration-300 hover:translate-y-1"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm4.25 2.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm5.75-2.88a1.13 1.13 0 1 0 1.13 1.13 1.13 1.13 0 0 0-1.13-1.13z" />
                                </svg>
                            </a>
                            <a 
                                title='Enviar mensaje via Whatsapp'
                                className={`${scrolled ? 'bg-espresso shadow-white shadow-md' : 'bg-espresso' } inline-block font-bold text-md uppercase tracking-normal shadow-md
                                text-white rounded-lg mx-6 px-6 py-3 hover:translate-y-1 will-change-auto hover:shadow-md transition-all duration-300 active:ring-3 active:ring-purple-600`}
                                href="https://wa.me/56995629153?text=Hola!%20Deseo%20realizar%20un%20pedido" 
                                target='_blank'
                            >
                                Realizar Pedido       
                            </a>
                        </div>
                    </div>
                    <div className='md:hidden flex'>
                        <button 
                            className='w-18 h-18 inset-0'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? 
                                <svg
                                    viewBox='0 0 24 24'
                                    className='flex fill-pink-500'
                                >
                                    <path
                                        
                                        d='M18.3 4.3 12 10.6 5.7 4.3 4.3 5.7 10.6 12l-6.3 6.3 1.4 1.4 6.3-6.3 6.3 6.3 1.4-1.4-6.3-6.3 6.3-6.3z'>
                                        
                                    </path>
                                </svg>
                            : 
                                <svg
                                    viewBox='0 0 24 24'
                                    className='flex fill-pink-500'
                                >
                                    <path 
                                        d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                        >
                                    </path>

                                </svg>
                            }
                        </button>
                        {isOpen && (
                            <div className={`w-full min-h-96 left-0 top-35 absolute ${scrolled ? 'bg-yellow-950 text-white' :'text-white bg-espresso'} z-200 transition-all duration-150`}>
                                <nav className='flex flex-col text-center'>
                                    {navegador.map((n, i) => (
                                        <a 
                                            href={n.href} 
                                            key={i}
                                            className='text-md uppercase tracking-normal transition-all duration-300 relative py-10 
                                            hover:text-pink-500 '
                                        >
                                            {n.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        )}
                            
                    </div>
                </div>
            </header>
        </>

    )
}
