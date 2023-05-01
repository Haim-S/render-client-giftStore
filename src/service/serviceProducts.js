import { END_POINT, DEFAULT_OPTIONS } from "../constant/apiStuff"

export const getAllProducts = async () => {
    try {
        const res = await fetch(`${END_POINT}`, DEFAULT_OPTIONS);
        const data = await res.json();
    return data;
    } catch (error) {
        return Promise.reject(error);
    }
}



export const getCategoryProducts = async (category)=> {
    
    try {
       
        const res = await fetch(`${END_POINT}/category/${category}`, DEFAULT_OPTIONS);
        const data = await res.json();
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}


export const getOneProductById = async (id)=>{
    try {
        const res = await fetch(`${END_POINT}/${id}`, DEFAULT_OPTIONS);
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

