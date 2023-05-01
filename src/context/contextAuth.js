
import React, { createContext, useContext, useState } from "react";
import {login , register, logout} from "../service/serviceAuth";

const authContext = createContext();

export function UseAuthContext(){
    return useContext(authContext);
}


export default function ProviderAuth({children}){

    const [isAuth, setIsAuth] = useState(false);


    const Use_Login =  async (value) => {
        const res = await login(value);
       setIsAuth(true);
        return res;
    }
    
    const Use_Register = async (value) => {
        const res = await register(value);
        setIsAuth(true);
       
        return res;
    }

    const Use_Logout = async () => {
        const res = await logout();
        setIsAuth(false);
        return res;
    }

    return(
        <authContext.Provider value={{Use_Login, Use_Register, Use_Logout, isAuth, setIsAuth}}>
            {children}
        </authContext.Provider>
    );



}