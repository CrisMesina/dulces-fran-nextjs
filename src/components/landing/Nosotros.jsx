import React from 'react'
import Image from 'next/image'

export const Nosotros = () => {

    return (
        <section className='min-h-screen bg-nosotros py-20'>
            <div className='max-w-6xl mx-auto px-6'>
                
                {/* Título Principal */}
                <div className='text-center mb-16'>
                    <h2 className='font-Caveat text-6xl md:text-7xl text-white mb-4'>Nuestra Historia</h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-[#F8A8B9] to-[#ba3de3] mx-auto rounded-full'></div>
                </div>

                {/* Contenido Principal */}
                <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
                    
                    {/* Texto */}
                    <div className='space-y-6'>
                        <p className='text-lg text-white leading-relaxed'>
                            Somos un emprendimiento apasionado por crear momentos dulces y memorables. 
                            Lo que comenzó como una pequeña idea en la cocina, se ha convertido en nuestro sueño 
                            de compartir productos artesanales de excelente calidad con nuestra comunidad.
                        </p>
                        <p className='text-lg text-white leading-relaxed'>
                            Como PYME familiar, nos destacamos por nuestro toque personal. 
                            Conocemos cada pedido, entendemos tus necesidades y nos esforzamos 
                            por entregar productos que reflejen nuestra dedicación y profesionalismo.
                        </p>
                        <p className='text-lg text-white leading-relaxed'>
                            Creemos que los dulces son más que postres: son formas de celebrar, 
                            de expresar amor y de crear recuerdos. Te invitamos a ser parte de nuestra historia.
                        </p>
                    </div>

                    {/* Imagen decorativa */}
                    <div className='relative h-96 flex items-center justify-center'>
                        <div className='absolute inset-0 bg-gradient-to-br from-[#ba3de3] to-[#F8A8B9] rounded-3xl opacity-10 blur-2xl'></div>
                        <div className='relative z-10 w-80 h-80 bg-[#F4C9D6] rounded-3xl flex items-center justify-center shadow-lg'>
                            <span className='text-center'>
                                <Image src="/images/logo.png" height={500} width={500} alt=''/> 
                            </span>
                        </div>
                    </div>
                </div>


                {/* Call to Action */}
                <div className='bg-white rounded-3xl p-12 text-center shadow-xl'>
                    <h3 className='font-Caveat text-4xl text-pink-500 mb-4'>¿Tienes una idea especial?</h3>
                    <p className='text-lg text-[#5A4A42] mb-8 max-w-2xl mx-auto'>
                        Contáctanos para crear juntos algo extraordinario. 
                        Cada dulce cuenta una historia, y nos gustaría contar la tuya.
                    </p>
                    <a 
                        href="https://wa.me/56995629153?text=Hola%20Dulces%20Fran!%20Tengo%20una%20idea%20especial..." 
                        className='inline-block px-10 py-4 bg-gradient-to-r from-[#ba3de3] to-[#F8A8B9] text-white font-Caveat text-2xl rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
                    >
                        Contacta con nosotros
                    </a>
                </div>
            </div>
        </section>
    )
}
