export default function Input(props) {
  
  return (
    <input { ...props } required className="bg-[#181818] rounded px-2 py-4 text-[#d6d6d6] focus:outline-none" />
  )
}