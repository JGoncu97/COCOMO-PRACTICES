import React from 'react'
import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/Footer'
import ImgProblema from '../../assets/Problema a resolver.png'

export const Documentation = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
        <Header title="Documentación" />
        <main className='flex-grow p-4 md:p-8 bg-gray-900'>
            <div className='bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center'>
                <h2 className='text-2xl font-bold text-center text-black'>Problema a resolver : </h2>
                    <img src={ImgProblema} alt="Problema a resolver" />

                <h2 className='text-2xl font-bold text-center text-black'>Solución propuesta : </h2>
            </div>
        </main>
        <Footer />
    </div>
  )
}
