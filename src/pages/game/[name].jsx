import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

import Loading from '../../components/Loading'
import Ads from '../../components/Ads'

export async function getServerSideProps(context) {

  const name = context.query.name 

  return {
    props: {
      name
    }
  }

}

export default function Game(props) {

  const [game, setGame] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  useEffect(() => {
    axios(`/api/games/${props.name}`).then((response => {
      setGame(response.data)
      setRemoveLoading(true)
    }))
  }, [])

  const nameToUpperCase = props.name.toUpperCase()

  return(

    <div className="w-full max-w-[1200px] mx-auto">
    <header>
    <Link href="/">
      <h1 className="text-textColor text-center font-black sm:mt-14 text-3xl sm:text-5xl"> <span className="text-purple"> 	&lt; { nameToUpperCase } </span> <span className="text-purple"> &gt; </span> </h1>
    </Link>
      <h2 className="text-textColor text-center font-extrabold my-5 text-xl sm:mb-16">  <span className="text-purple"> 	&lt; </span> { game.length } Anúncio (s)<span className="text-purple"> &gt; </span></h2>
    </header>


      <Link className="justify-center" href={`/post/${props.name}`}>
        <div className="text-center text-textColor rounded px-4 py-3 mb-9 font-bold hover:bg-purple/50 bg-purple/80"><h3> Fazer um anúncio </h3></div>
      </Link>


          {!removeLoading && <Loading />}
      <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 mb-20">

          { game.map(ads => {
            return(
              <Ads
              key={ads.id}
              nickname={ads.nickname}
              yearsPlaying={ads.yearsPlaying}
              discord={ads.discord}
              />
            )
          }) }
          
        </section>

          <p className="mx-auto text-textColor bg-[#00000060] px-2 rounded text-center font-bold fixed bottom-1"> Os anúncios podem demorar um pouco para aparecer </p>


      </div>

  )

}