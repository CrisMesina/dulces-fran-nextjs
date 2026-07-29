import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='bg-espresso text-white pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
        <div className='space-y-6'>
          <div className='flex items-center gap-3'>
            <Image src='/images/logo.png' alt='Dulces Fran Logo' width={96} height={45} />
            <div>
              <p className='text-xs uppercase tracking-[0.25em] text-[#F4C9D6]'>Dulces Fran</p>
            </div>
          </div>
          <p className='text-sm text-[#FAFFC7]/90 leading-relaxed'>
            Emprendimiento familiar de dulces artesanales con recetas hechas con cariño, calidad y creatividad para tus momentos especiales.
          </p>
          <div className='text-sm text-[#F4C9D6]'>
            <p>© {new Date().getFullYear()} Dulces Fran</p>
          </div>
        </div>

        <div>
          <h3 className='font-Caveat text-2xl text-[#F8A8B9] mb-6'>Navegación</h3>
          <ul className='space-y-3 text-sm'>
            <li><a href='#productos' className='transition-colors duration-200 hover:text-[#ba3de3]'>Productos</a></li>
            <li><a href='#nosotros' className='transition-colors duration-200 hover:text-[#ba3de3]'>Nosotros</a></li>
            <li><a href='#contacto' className='transition-colors duration-200 hover:text-[#ba3de3]'>Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className='font-Caveat text-2xl text-[#F8A8B9] mb-6'>Contacto</h3>
          <div className='space-y-4 text-sm text-[#FAFFC7]/90'>
            <div>
              <p className='font-semibold text-white'>WhatsApp</p>
              <a href='https://wa.me/56995629153' className='hover:text-[#ba3de3]'>+56 9 9562 9153</a>
            </div>
          </div>
        </div>

        <div>
          <h3 className='font-Caveat text-2xl text-[#F8A8B9] mb-6'>Horarios</h3>
          <div className='rounded-3xl border border-[#FAFFC7]/20 bg-white/5 p-6 space-y-4 text-sm text-[#FAFFC7]/90'>
            <div>
              <p className='font-semibold text-white'>Lunes a Viernes</p>
              <p>09:00 - 18:00</p>
            </div>
            <div>
              <p className='font-semibold text-white'>Sábado</p>
              <p>10:00 - 16:00</p>
            </div>
            <div>
              <p className='font-semibold text-white'>Domingo</p>
              <p>Cerrado</p>
            </div>
            <a href='https://wa.me/56995629153?text=Hola%20Dulces%20Fran%21' className='inline-block mt-3 w-full rounded-xl bg-gradient-to-r from-[#ba3de3] to-[#F8A8B9] py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:opacity-90'>Enviar mensaje</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
