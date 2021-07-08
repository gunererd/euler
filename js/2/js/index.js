/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function* fibonacciGenerator() {
    let a = 0
    let b = 1

    while (true) {

        let sum = a + b

        yield sum

        a = b
        b = sum

    }

}

const fibo = fibonacciGenerator()

let sum = 0
while(true) {
    let value = fibo.next().value

    if (value >= 4000000) {
        break
    }

    if (value % 2 === 0) {
        sum += value
    }
}

console.log(sum);