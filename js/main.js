"user strict"
// Task 1 

// function getSum(n) {
//     let sum = 0;
//     for (let i = 0; i<=n; i++) {
//     sum += i;
//     }
//     return sum;
// }
// console.log( getSum(100));

// #### Task 2 💻

function getSum(sum) {
    let year = 5;
    let sumYear = sum / year;
    let sumInterest = sumYear * 0.17;
    let interestFiveYears = sumInterest * year;
    
    return interestFiveYears;
} 
console.log(getSum(1000));
    
// Task 4

// function getSumNumbers(number) {
//     let figures = '' + number
//     let sum = 0 

//     for(let i = 0; i < figures.length;i++)
//     sum += +figures[i]

//     return sum
// }

// alert(getSumNumbers(2022))

// ### ADVANCED level

// #### Task 1 👨‍🏫 

// function getSum(a, b, c) {
//     let sum = a + b;
    
//     let sum1 = a + c;

//     let sum2 = b + c;
//     if (sum > c && sum1 > b && sum2 > a) {
//     return 'true.';
//     }
//     else return 'false.';
    
// }

// alert(getSum(3, 2, 3));
