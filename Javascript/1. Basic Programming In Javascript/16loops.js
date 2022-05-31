// Loop in details    3 May  time 1:41 pm



//while loop

// In coding there is a saynig called dry //
// Don't repeat yourself

for(let i = 0; i <= 10; i++){
    console.log(i);
}

let num = 10;

let total = 0;

for(let i = 1; i <= num ; i++){
    total = total + i;
    console.log(total)
}


console.log((num * (num +1)) / 2)// Ma;h fourmula of the same upper question

// Break and continue 

for(let j = 0 ; j <= 10 ; j++){
    if(j === 4){
        break;
    }
    console.log(j)
} 
///// This break function breaks the whole loop and gets out when the condition becomes true

// On the other hand continue skips the specific action when the condition gets true

// emaxple 

for(let i = 0; i <= 20; i++){
    if(i === 6){
        continue;// What it does that it don't go to the console.log part it goes directily to the condition section for the next check
    }
    console.log(i);
}

//Do while loop

//In do while loop the code runs atleast once
