import Header from "../components/Header"
import Footer from "../components/Footer"

const Reservas = () => {
  return (
    <main>
        <div>
            <Header />
        </div>
         <section className="flex-1 flex items-center justify-center px-4 py-10">
                    <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white/90 px-6 py-8 shadow-sm backdrop-blur-sm md:px-8">
                        

                        <div className="space-y-1.5 mb-4">
                            <label className="block text-[14px] font-semibold text-[#0f1111]">Nombre completo</label>
                            <input
                                type="text"
                                placeholder="Ej.Ana Silva"
                                onChange={(e) => setUsuario(e.target.value)}
                                className="w-full h-11 rounded-md border border-[#a6a6a6] bg-white px-3 text-[15px] text-[#0f1111] placeholder:text-gray-400 shadow-[inset_0_1px_2px_rgba(15,17,17,0.08)] transition focus:outline-none focus:border-[#e77600] focus:ring-3 focus:ring-[#fbd8b4]"
                            />
                        </div>

                        <div className="space-y-1.5 mb-4">
                            <label className="block text-[14px] font-semibold text-[#0f1111]">Correo electrónico</label>
                            <input
                                type="text"
                                placeholder="Tu@email.com"
                                onChange={(e) => setLibro(e.target.value)}
                                className="w-full h-11 rounded-md border border-[#a6a6a6] bg-white px-3 text-[15px] text-[#0f1111] placeholder:text-gray-400 shadow-[inset_0_1px_2px_rgba(15,17,17,0.08)] transition focus:outline-none focus:border-[#e77600] focus:ring-3 focus:ring-[#fbd8b4]"
                            />
                        </div>


                        <div className="space-y-2 mb-4">
                            <p className="text-[14px] font-semibold text-[#0f1111]">Nivel de experiencia</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                                <label className="inline-flex items-center gap-2 text-[14px] text-gray-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="lugar"
                                        value="biblioteca"
                                        onChange={() => setLugar("biblioteca")}
                                        className="h-4 w-4 accent-amber-500"
                                    />
                                    Retiro en biblioteca
                                </label>
                                <label className="inline-flex items-center gap-2 text-[14px] text-gray-700 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="lugar"
                                        value="domicilio"
                                        onChange={() => setLugar("domicilio")}
                                        className="h-4 w-4 accent-amber-500"
                                    />
                                    A domicilio
                                </label>
                            </div>
                        </div>

                        {getLugar === "domicilio" && (
                            <div className="space-y-1.5 mb-4">
                                <label className="block text-[14px] font-semibold text-[#0f1111]">Direccion de domicilio</label>
                                <input
                                    type="text"
                                    placeholder="Calle 13 #30-45"
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className="w-full h-11 rounded-md border border-[#a6a6a6] bg-white px-3 text-[15px] text-[#0f1111] placeholder:text-gray-400 shadow-[inset_0_1px_2px_rgba(15,17,17,0.08)] transition focus:outline-none focus:border-[#e77600] focus:ring-3 focus:ring-[#fbd8b4]"
                                />
                            </div>
                        )}

                        <div className="mt-10 flex justify-center">
                            <button
                                type="button"
                                onClick={enviarReserva}
                                className="w-full md:w-auto md:min-w-[300px] py-5 px-8 text-2xl rounded-2xl border border-[#f0c14b] bg-gradient-to-b from-[#ffe082] to-[#ffcc4d] text-[#111827] font-bold shadow-md shadow-amber-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#ffd760] hover:to-[#f6be2d] hover:shadow-lg hover:shadow-amber-300/70 focus:outline-none focus:ring-4 focus:ring-amber-200 active:translate-y-0"
                            >
                                Enviar reserva
                            </button>
                        </div>
                    </div>
                </section>
                <div>
                     <Footer />
                </div>


    </main>
  )
}

export default Reservas