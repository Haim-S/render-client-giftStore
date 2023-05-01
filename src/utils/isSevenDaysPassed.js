
/*
In the function I provided, timeDifference / (1000 * 3600 * 24) is used to convert the time difference between the two dates (in milliseconds) into the difference in days.

Let's break it down:

1000 is the number of milliseconds in a second
3600 is the number of seconds in an hour
24 is the number of hours in a day
When you multiply 1000 * 3600 * 24, you get the number of milliseconds in a day. So when you divide the time difference (in milliseconds) by this number, you get the difference in days.

For example, if the time difference is 604800000 milliseconds (7 days), dividing by (1000 * 3600 * 24) would give you 7, which is the difference in days.

This calculation is necessary because the getTime() method of a Date object returns the number of milliseconds since January 1, 1970, so you need to convert this value to a difference in days to check if seven days have passed.
*/ 

function checkIfSevenDaysPassed(dateString) {
    const currentDate = new Date();
    const receivedDate = new Date(dateString);
    const timeDifference = currentDate.getTime() - receivedDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
  
    if (daysDifference >= 7) {
      return false;
    } else {
      return true;
    }
  }

export default checkIfSevenDaysPassed;

  