
import React, {createContext, useContext, useState} from "react";
import {sevenDays} from "../utils/sevenDaysArr";


const TheBrainContext = createContext();

export function UseTheBrainContext() {
    return useContext(TheBrainContext);
}

export default function ProviderBrain({children}) {
    

   const [isApproval, setIsApproval] = useState();


const Use_randomDaysToDiscount = () =>{

   const randomDate = sevenDays();
   let today = new Date().toISOString().slice(0,10);
   

   if(today == randomDate){
       setTimeout(()=>{
           setIsApproval(true);
         },4000)
   }



}





    return(
        <TheBrainContext.Provider value={{Use_randomDaysToDiscount, isApproval, setIsApproval}}>
            {children}
        </TheBrainContext.Provider>
    )
}