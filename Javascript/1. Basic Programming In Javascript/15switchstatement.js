//Switch statement      3 May 2022 time 1:31pm



let dayNumber;
dayNumber = +prompt("Enter the number of the day");

switch(dayNumber){
    case 1: // in case the coloun is important
        console.log("Today is sunday");
        break;
    case 2:
        console.log("Today is monday");
        break;
    case 3:
        console.log("Today is tuesday");
        break;
    case 4:
        console.log("Today is wednesday");
        break;
    case 5:
        console.log("Today is thursday");
        break;
    case 6:
        console.log("Today is friday");
        break;
    case 7:
        console.log("Today is saturday");
        break;
    default:
        console.log("Invalid Number")    ;
}