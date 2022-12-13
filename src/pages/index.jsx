import axios from 'axios'
import { useState, useEffect } from 'react'

import Game from '../components/Game'
import Link from 'next/link'


export default function Home() {


  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <header>
        <h1 className="text-textColor text-center font-black sm:mt-14 text-4xl sm:text-5xl"> <span className="text-purple"> 	&lt; NLW </span> Esport <span className="text-purple"> &gt; </span> </h1>
        <h2 className="text-textColor text-center font-extrabold my-5 text-xl sm:mb-16 sm:text-4xl"> <span className="text-purple">G</span>ames</h2>
      </header>

      <section className='grid grid-cols-2 gap-4  sm:grid-cols-3 mb-5 lg:grid-cols-4 xl:grid-cols-6 justify-items-center'>
      
          <Link href={`game/valorant`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'}
            />
          </Link>
          <Link href={`game/gta`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'}
            />
          </Link>
          <Link href={`game/csgo`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg'}
            />
          </Link>
          <Link href={`game/overwatch`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/515025-188x250.jpg'}
            />
          </Link>
          <Link href={`game/warzone`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg'}
            />
          </Link>
          <Link href={`game/minecraft`}>
            <Game
            image={'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg'}
            />
          </Link>
        
       
      </section>

      <footer className="bg-purple/5 px-10 py-5 my-10 rounded-lg">
        <div>
          <h3 className="text-textColor font-extrabold text-xl">Não encontrou seu DUO?</h3>
          <p className="text-textColor"> Publique um anúncio para encontrar novos players </p>
        </div>
      </footer>

    </div>

    


  )
}
