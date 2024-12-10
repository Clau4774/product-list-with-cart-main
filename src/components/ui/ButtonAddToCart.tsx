import { ButtonAddToCartInterface } from "../interfaces/index"

function ButtonAddToCart({selected = false, children = 'Add to Cart', ...props}: ButtonAddToCartInterface) {

    console.log('selected button', selected)
    console.log('children', children)

    return (
        <button className="max-w-64 bg-white  px-3 py-2 border-2 rounded-full hover:text-red-600 transition-all w-full" {...props}>{children}</button>
    )
}

export default ButtonAddToCart
