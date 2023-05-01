

export const sevenDays = ()=>{
    let daysArray = [];

    for (let i = 0; i < 7; i++) {
      let nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + i);
      daysArray.push(nextDay.toISOString().slice(0,10));
    }

    
let randomIndex = Math.floor(Math.random() * daysArray.length);
let randomDate = daysArray[randomIndex];
return randomDate;


}



