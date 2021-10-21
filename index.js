const first = ("Fizz!");
const second = ("Buzz!");
const third = ("FizzBuzz!");
const fourth = ("Fish!");
const fith = ("Bus!");



for (let i = 1; i <= 100; i++){
    console.log(i);
    if (i%3 === 0){
        console.log(first);
    }
    else if (i%5 === 0){
        console.log(second);
    } 
    else if (i%7 === 0)
    console.log(fourth);

    else if (i%8 === 0){
        console.log(fith);
    }

    
    else if (i%3 === 0 && i%5 === 0){
            console.log(third);
        }
    

}