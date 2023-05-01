
    export const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: "USD"
        }).format(price);
    }

   export const percentage = (percent, total)=> {
        const pp = (percent/ 100) * total;
       const newprice = formatPrice((percent - pp).toFixed(2));
       return newprice;
    }