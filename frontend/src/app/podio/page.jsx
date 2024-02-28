import React from 'react'
import Podio from '@/components/Podio'
import '@/styles/pages/podioPage.css'

export default function Page() {
  return (
    <section className='stats'>
      <h1>Ganadores del juego</h1>

      <section className='podium'>

        <Podio 
          usuario="Luis"
          lugar="2"
          duracion={3}
        />
        <Podio 
          usuario="Miguel"
          lugar="1"
          duracion={2}
        />
        <Podio 
          usuario="Ana"
          lugar="3"
          duracion={4}
        />

      </section>

      <a className='cta-podium' href="">Volver al registro</a>

    </section>
  )
}
