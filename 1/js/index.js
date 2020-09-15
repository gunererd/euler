/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


let sum = [...Array(1001).keys()]
    .filter(i => {
        if (i % 5 === 0|| i % 3 === 0) {
            return i
        }   
    })
    .reduce((a,b) => a+b);

console.log(sum);