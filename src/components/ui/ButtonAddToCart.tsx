import { ButtonAddToCartInterface } from "../interfaces/index"

function ButtonAddToCart({children, ...props}: ButtonAddToCartInterface) {
    
    const {selected} = props;

    const component = {
        true: <button>{children}</button>,
        false: <button>{children}</button>
      }
    console.log(component.true)
      return component.true;
    
}

export default ButtonAddToCart
