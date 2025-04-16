import React from 'react'
import { CocomoCalculator } from '../../components/CocomoCalculator'
import {Header} from '../../components/header/header'
import { Footer } from '../../components/footer/footer'


export const Application = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col'>
          <Header title="Calculadora COCOMO" />
        <main className='flex-grow p-4 md:p-8 bg-gray-900'>
            <div className='max-w-6xl mx-auto'>
                <CocomoCalculator />
            </div>
        </main>
        <Footer />
    </div>
  )
}
