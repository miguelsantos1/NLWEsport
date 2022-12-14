import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Input from '../../components/Input'
import logo from '../../public/logo-nlw-esport.svg'

export async function getServerSideProps(context) {

  const name = context.query.name 

  return {
    props: {
      name
    }
  }

}

export default function Post(props) {

  const [game, setGame] = useState([])

  useEffect(() => {
    axios(`http://localhost:3000/api/games/${props.name}/`).then((response => {
      setGame(response.data)
    }))
  }, [])


  return(

    <div>
      <header className="mb-9">
        <Link href="/">
         <Image className="h-40 mx-auto" src={logo}/>
        </Link>
          
      </header>

      <main>

        <h2 className="text-textColor text-center font-extrabold text-xl sm:mb-10 sm:text-4xl"> Publicar um anúncio em <br /> <h1 className="text-textColor text-center font-black mt-2 text-3xl"> <span className="text-purple"> &lt; </span> 
         <Link href={`/game/${props.name}`}>{ props.name.toUpperCase() }</Link> 
         <span className="text-purple"> / &gt; </span> </h1></h2>
        <form action={`/api/games/${props.name}/ad`} method="POST" className="flex flex-col gap-3 mt-5 max-w-lg mx-auto">


          <select className="bg-[#181818] text-textColor px-2 py-4" name="game" id="game" >
            <option>{ props.name.toUpperCase() }</option>
  
          </select>
          <Input placeholder="nickname" name="nickname" />
          <Input type="number" max={100} placeholder="Anos jogando (tudo bem ser ZERO!)" name="yearsPlaying" />
          <Input placeholder="Discord" name="discord" />

          <input className="px-2 py-4 bg-purple mt-2 text-textColor hover:bg-purple/60 cursor-pointer" type="submit" value="Postar!" />

        </form>

      </main>
    </div>
  )
}