import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Reservas = () => {
    const [usuario, setUsuario] = useState('')
    const [correo, setCorreo] = useState('')
    const [nivel, setNivel] = useState('principiante')
    const [mensaje, setMensaje] = useState('')

    const enviarReserva = () => {
        console.log({ usuario, correo, nivel, mensaje })
    }

    const inputClass = "w-full h-11 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition"

    return (
        <div className="min-h-screen flex flex-col bg-[#f5f3ee]">
            <Header />
            <div className="px-12 py-12 max-w-xl mx-auto w-full">
                <h2 className="text-4xl font-light text-gray-800 mb-2">Reserva un Taller</h2>
                <p className="text-gray-500 mb-10">
                    Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
                </p>
            </div>
            <section className="flex-1 flex items-start justify-center px-4 pb-16">
                <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white px-8 py-8 shadow-sm">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Nombre completo</label>
                        <input type="text" placeholder="Ej. Ana Silva" onChange={(e) => setUsuario(e.target.value)} className={inputClass} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Correo electrónico</label>
                        <input type="text" placeholder="tu@email.com" onChange={(e) => setCorreo(e.target.value)} className={inputClass} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Nivel de experiencia</label>
                        <select value={nivel} onChange={(e) => setNivel(e.target.value)} className={inputClass}>
                            <option value="principiante">Principiante (Nunca he tenido un Bonsái)</option>
                            <option value="intermedio">Intermedio (Tengo algunos árboles)</option>
                            <option value="avanzado">Avanzado (Practico hace años)</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-800 mb-1.5">Mensaje (Opcional)</label>
                        <textarea
                            placeholder="¿Qué te gustaría aprender?"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            rows={4}
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 transition resize-none"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={enviarReserva}
                        className="w-full py-3 rounded-md bg-[#2d3a2e] text-white text-sm font-medium hover:bg-[#1e2a1f] transition-colors"
                    >
                        Enviar Solicitud
                    </button>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Reservas