import {END_POINT_AUTH} from "../constant/apiStuff";
import {getLocalStorageValue, setLocalStorageValue, deleteLocalStorageValue} from "../utils/localStorage.utils"

export const login = async (value)=> {
    try {
        const res = await fetch(`${END_POINT_AUTH}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify( {
                email : value.email,
                password: value.password
            }),
        });
        const data = await res.json();
        setLocalStorageValue("token", data.jwt_ac_token);
        setLocalStorageValue("id_client", data._id);
        return data; 
    } catch (error) {
        return Promise.reject(error);
    }
}

export const register = async (value)=> {
    try {
        const res = await fetch(`${END_POINT_AUTH}/register`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify( {
                email : value.email,
                password: value.password,
                firstName: value.firstName,
                lastName: value.lastName,
                age: value.age,
                country: value.country
            }),
        });
        const data = await res.json();
        // console.log(data);
        // return data;
        setLocalStorageValue("id_client", data._id);
        return setLocalStorageValue("token", data.jwt_ac_token);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const logout = async () => {
    try {
        const res = await fetch(`${END_POINT_AUTH}/logout`, {
            method: "DELETE",
            headers: {
                "Content-type": "appliction/json",
            },
            body: JSON.stringify({
                token: getLocalStorageValue("token")
            }),
        });
        deleteLocalStorageValue("token");
        const data = await res.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}