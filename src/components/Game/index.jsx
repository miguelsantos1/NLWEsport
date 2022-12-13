export default function Game(props) {
  return(
    <div className="hover:shadow-md hover:shadow-textColor transition duration-200">
      <img className="rounded w-50 h-60" src={ props.image } alt="game banner" />
  </div>
  )
}