import { createContext, useContext, useState } from "react";



const ContextControllers = createContext();

export function UseContextControllers() {
    return useContext(ContextControllers);
}



export default function ProviderContainer({children}) {
    
    const [cart, setCart] = useState([]);
    const [id, setId] = useState(1);



    const cartArray = (ProductsItem,discountedPrice,countProducts, totalPrice) => {
       
    {ProductsItem && setId(prev => ++prev)}
    if(cart.find((item) => item.product === ProductsItem.title)){
    return console.log("Error");
    }
        const newCart = {
            id: id ,
            product: ProductsItem.title,
            unitPrice: discountedPrice,
            Quantity: countProducts,
            stock: ProductsItem.stock,
            TotalPrice: totalPrice,
        }
    setCart(prev => [...prev, newCart]);
    }

const editQuantity = (id, Qty) => {
    const cartCopy = [...cart];
    const indexByProductId = cartCopy.findIndex((product) => product.id === id);
    const productEdit = cartCopy[indexByProductId];
    let total = productEdit.unitPrice * Qty;
    cartCopy[indexByProductId] = {
        ...productEdit,
        Quantity:Qty,
        TotalPrice: total,
    };
    setCart(cartCopy);
}

const deleteOne = (id) =>{
const cartCopy = [...cart];
const indexByProductId = cartCopy.findIndex((one) => one.id === id);
cartCopy.splice(indexByProductId, 1);
setCart(cartCopy);
}


return(
    <ContextControllers.Provider value={{cartArray,editQuantity,deleteOne, cart, setCart}}>
        {children}
    </ContextControllers.Provider>
);

}