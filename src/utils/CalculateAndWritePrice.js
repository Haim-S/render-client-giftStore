
import {UseTheBrainContext} from "../context/contextTheBrain";


    export const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: "USD"
        }).format(price);
    }

    
    
    export const percentage = (percent, total)=> {
        
        const {isApproval, setIsApproval} = UseTheBrainContext();
if(isApproval){
    
    setTimeout(()=>{
        setIsApproval(false)
    },30000)
        const mytotal = 50;
        const pp = (percent/ 100) * mytotal;
        const newprice = formatPrice((percent - pp).toFixed(2));
        return newprice;

}
        const pp = (percent/ 100) * total;
       const newprice = formatPrice((percent - pp).toFixed(2));
       return newprice;
    }