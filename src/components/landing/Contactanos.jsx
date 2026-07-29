'use client'

import { useState } from 'react'
import Image from 'next/image'

export const Contactanos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    })

    const contactMethods = [
        {
            id: 1,
            title: "Teléfono",
            value: "+56 9 9562 9153",
            description: "WhatsApp",
            link: "https://wa.me/56995629153"
        },
        {
            id: 2,
            title: "Ubicación",
            value: "Chile",
            description: "Atención personalizada",
            link: "#"
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log(formData)
        setFormData({
            nombre: '',
            email: '',
            telefono: '',
            asunto: '',
            mensaje: ''
        })
    }

    return (
        <section className='min-h-screen bg-gradient-to-b from-[#F4C9D6] to-[#FAFFC7] py-20'>
            <div className='max-w-6xl mx-auto px-6'>
                
                {/* Título Principal */}
                <div className='text-center mb-16'>
                    <h2 className='font-Caveat text-6xl md:text-7xl text-[#3E2723] mb-4'>Contáctanos</h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-[#ba3de3] to-[#F8A8B9] mx-auto rounded-full'></div>
                    <p className='text-lg text-[#5A4A42] mt-6'>Estamos aquí para responder todas tus preguntas y hacer realidad tu pedido especial</p>
                </div>

                {/* Métodos de Contacto */}
                <div className='grid md:grid-cols-3 gap-8 mb-20'>
                    {contactMethods.map((method) => (
                        <a 
                            key={method.id}
                            href={method.link}
                            className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center hover:text-[#ba3de3]'
                        >
                            <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#ba3de3] to-[#F8A8B9] rounded-full flex items-center justify-center'>
                                <span className='text-3xl'>📍</span>
                            </div>
                            <h3 className='font-Caveat text-3xl text-[#3E2723] mb-2'>{method.title}</h3>
                            <p className='text-xl font-semibold text-[#ba3de3] mb-2'>{method.value}</p>
                            <p className='text-[#5A4A42] text-sm'>{method.description}</p>
                        </a>
                    ))}
                </div>

                {/* Formulario y Espacio para Imagen */}
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    
                    {/* Formulario */}
                    <div className='bg-white rounded-3xl p-8 shadow-xl'>
                        <h3 className='font-Caveat text-4xl text-[#3E2723] mb-6'>Envíanos un Mensaje</h3>
                        
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-[#3E2723] font-semibold mb-2'>Nombre *</label>
                                <input 
                                    type='text'
                                    name='nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-[#F4C9D6] rounded-lg focus:outline-none focus:border-[#ba3de3] text-[#3E2723]'
                                    placeholder='Tu nombre'
                                />
                            </div>

                            <div>
                                <label className='block text-[#3E2723] font-semibold mb-2'>Email *</label>
                                <input 
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-[#F4C9D6] rounded-lg focus:outline-none focus:border-[#ba3de3] text-[#3E2723]'
                                    placeholder='tu@email.com'
                                />
                            </div>

                            <div>
                                <label className='block text-[#3E2723] font-semibold mb-2'>Teléfono</label>
                                <input 
                                    type='tel'
                                    name='telefono'
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 border-2 border-[#F4C9D6] rounded-lg focus:outline-none focus:border-[#ba3de3] text-[#3E2723]'
                                    placeholder='+56 9 9999 9999'
                                />
                            </div>

                            <div>
                                <label className='block text-[#3E2723] font-semibold mb-2'>Asunto *</label>
                                <input 
                                    type='text'
                                    name='asunto'
                                    value={formData.asunto}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border-2 border-[#F4C9D6] rounded-lg focus:outline-none focus:border-[#ba3de3] text-[#3E2723]'
                                    placeholder='Ej: Pedido especial, consulta, etc.'
                                />
                            </div>

                            <div>
                                <label className='block text-[#3E2723] font-semibold mb-2'>Mensaje *</label>
                                <textarea 
                                    name='mensaje'
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows='4'
                                    className='w-full px-4 py-3 border-2 border-[#F4C9D6] rounded-lg focus:outline-none focus:border-[#ba3de3] text-[#3E2723] resize-none'
                                    placeholder='Cuéntanos qué necesitas...'
                                ></textarea>
                            </div>

                            <button 
                                type='submit'
                                className='w-full px-6 py-4 bg-gradient-to-r from-[#ba3de3] to-[#F8A8B9] text-white font-Caveat text-2xl rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300'
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Espacio para Imagen */}
                    <div className='flex flex-col gap-6'>
                        
                        <div className='bg-white rounded-2xl p-6 shadow-lg'>
                            <h4 className='font-Caveat text-2xl text-[#3E2723] mb-4'>Horario de Atención</h4>
                            <div className='space-y-3 text-[#5A4A42]'>
                                <p><span className='font-semibold'>Lunes a Viernes:</span> 09:00 - 18:00</p>
                                <p><span className='font-semibold'>Sábado:</span> 10:00 - 16:00</p>
                                <p><span className='font-semibold'>Domingo:</span> Cerrado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
