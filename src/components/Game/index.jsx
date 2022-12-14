export default function Game(props) {
  return(
    <div className="shadow-md shadow-purple hover:shadow-lg hover:shadow-purple transition duration-200">
      <img className="rounded-lg w-40 bg-cover" src={ props.image } alt="game banner" />
  </div>
  )
}