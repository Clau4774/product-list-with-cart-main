import { ButtonInterface } from "../interfaces"


function Button({children, ...props}: ButtonInterface) {
  return (
    <button className="bg-red-600 max-w-96 w-full font-medium text-white px-4 py-3 rounded-full hover:bg-red-700 transition-all" {...props}>
      {children}
    </button>
  )
}

export default Button
