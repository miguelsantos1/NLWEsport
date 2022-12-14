import { DiscordLogo } from "phosphor-react"

export default function Ads(props) {

  if(props.yearsPlaying == 0) {
    var equal0 = 'Tempo de jogo recente'
  }

  if (props.yearsPlaying > 0) {
    var plusThan0 = `${props.yearsPlaying} ano(s) de jogo`
  }

  const nameToUpperCase = props.nickname.toUpperCase()
  const discordToLowerCase = props.discord.toLowerCase()

  return(
    <div className="bg-purple/10 px-12 sm:px-7 text-textColor shadow-purple shadow-sm py-7 rounded-LG">
          <h4 className="font-semibold mb-3 text-center"> <span className="text-purple"> 	&lt; </span> { nameToUpperCase } <span className="text-purple"> 	/ &gt; </span> </h4>
          <hr className="text-textColor mb-2"/>
          <div className="flex items-center gap-2" >
            <DiscordLogo size={20} color="#cebdff" />
            <p className="font-semibold"> { discordToLowerCase } </p>
          </div> 
          <p className="font-semibold mt-1"> { plusThan0 || equal0 }  </p>
      </div>
  )
}