
import React, {createContext, useContext, useState} from "react";
import {getAllMyOrders,createOrder, deleteOrder} from "../service/serviceOrder";


const orderContext = createContext();

export function UseOrderContext(){
    return useContext(orderContext);
}


export default function ProviderOrder({children}){

    const [products, setproducts] = useState();

    const Use_getAllMyOrders = async ()=>{
        const res = await getAllMyOrders();
        return setproducts(res);
    }


    const Use_CreateOrder = async (value, total)=> {
        const res = await createOrder(value, total);
        return res;
    }

    const Use_DeleteOrder = async (id_order)=> {
        const res = await deleteOrder(id_order);
        console.log({from: "order", res});
        setproducts(res);
        return res;
    }
    
    


    return(
        <orderContext.Provider value={{Use_getAllMyOrders, Use_CreateOrder, Use_DeleteOrder, products}}>
            {children}
        </orderContext.Provider>
    )

}