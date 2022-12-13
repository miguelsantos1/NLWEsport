export default function Ads(props) {

  const nameToUpperCase = props.nickname.toUpperCase()

  return(
    <div className="bg-[#181818] px-12 text-textColor py-10 rounded">
          <h4 className="font-semibold mb-2 text-center"> { nameToUpperCase } </h4>
          <hr className="text-textColor mb-2"/>
          <p className="font-semibold"> DISCORD: { props.discord } </p> 
          <p className="font-semibold"> ANOS DE JOGO: { props.yearsPlaying } </p>
      </div>
  )
}