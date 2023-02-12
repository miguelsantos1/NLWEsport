import { DiscordLogo, CircleWavyCheck } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog';

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
          <p className="font-semibold mt-1 mb-3"> { plusThan0 || equal0 }  </p>

          <Dialog.Root>
            <Dialog.Trigger> 
            <button className="bg-purple/50 hover:bg-purple/30 py-2 px-10 rounded">
                Conectar
            </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content className="flex flex-col fixed w-4/5 sm:w-auto rounded px-4 py-10 top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-[#202020]">
                <CircleWavyCheck size={70} color="#00803e" className=" mb-2 self-center" />
                <h1 className="font-bold text-2xl text-textColor text-center my-4"> Agora é só adicionar! </h1>
                <p className="text-textColor/30 text-center"> Discord </p>
                <p className="bg-purple/40 hover:bg-purple/30 py-2 rounded text-textColor text-center mt-2"> { discordToLowerCase } </p>
                <Dialog.Description />
                
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
  </Dialog.Root>
      </div>
  )
}