export default function Game(props) {
  return(
    <div className="shadow-md shadow-purple hover:shadow-lg hover:shadow-purple transition duration-200">
      <img className="rounded w-50 h-60" src={ props.image } alt="game banner" />
  </div>
  )
}