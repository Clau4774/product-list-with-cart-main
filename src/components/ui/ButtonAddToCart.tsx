import React from "react";
import { ButtonAddToCartInterface } from "../../interfaces/index"
import addCartIcon from '../../assets/images/icon-add-to-cart.svg'
import incrementItemIcon from '../../assets/images/icon-increment-quantity.svg';
import decrementItemIcon from '../../assets/images/icon-decrement-quantity.svg';


function ButtonAddToCart( {...props}: ButtonAddToCartInterface) {

  const [itemSelected, setItemSelected] = React.useState<number>(0);
    
    
    const changeInitialState = ():void => {
        if(itemSelected === 0) setItemSelected(itemSelected + 1);
    };
    

    return (
        <>
        <button onClick={changeInitialState} className={`${itemSelected === 0 ? 'bg-white' : 'bg-red-500'} w-48 px-6 outline-none  py-3 border-2 rounded-full hover:text-red-600 transition-all select-none`} {...props}>
            {
            itemSelected === 0 
            ? 
            <div className="flex justify-center gap-4">
                <img src={addCartIcon} alt="Cart icon"/>
                <span>Add to Cart</span>
            </div>
            :
            <div className="flex justify-between gap-8 text-white">
                <div onClick={() => setItemSelected(itemSelected - 1)} className="flex rounded-full border-2 p-1 hover:text-red-500 hover:bg-white " >
                    <img src={decrementItemIcon} alt="Decrement icon"/>
                </div>
                <span>{itemSelected}</span>
                <div onClick={() => setItemSelected(itemSelected + 1)} className="flex rounded-full border-2 p-1 hover:text-red-500 hover:bg-white ">
                    <img src={incrementItemIcon} alt="Increment icon"/> 
                </div>
            </div>
            }
                
        </button>
        
        </>
    )
}

export default ButtonAddToCart
