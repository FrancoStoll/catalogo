import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { Product } from '../App';


interface CartContextInterface {
    cart: Product[],
    setCart: Dispatch<SetStateAction<Product[]>>,
}



const CartContext = createContext({} as CartContextInterface)


const CartProvider = ({children}: {children: ReactNode}) => {

    const [cart, setCart] = useState<Product[]>([])

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
           
        }
        }>
            {children}
        </CartContext.Provider>
    )
}


export {
    CartProvider
}

export default CartContext

