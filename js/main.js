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
    // function getSumNumber(num) {
        
    //         var sum = 0, tmp;

    //         while (num) {

    //             tmp = num % 10; 1111 / 10 , tmp = 1, 111 / 10, tmp = 1
    //             num = (num - tmp) / 10; 1111 - 1 = 1110 / 10, num = 111, 111 - 1 =110 / 10, num = 11

    //             sum += tmp; 0 + 1, sum = 1

    //         }

    //         return sum;

    //     }
    //     alert(getSumNumber(1111));
        

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
































// let str = "#";
// while (str.length<=7){
//     console.log(str);
//     str+="#";
//     }

// Task 4

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// let shouldGoToWork = key && documents && pen;  apple || orange;
// console.log(shouldGoToWork);

// console.log(key && documents && pen);
// console.log(apple || orange);

// Task 5

// let route = prompt('введите число')
//     switch (route) {
//         case 'route % 5':
//             alert('Fiz');
//             break;
//         }

// let height = 15;
// let width = 20;

// console.log(height && width);
// console.log(height || width);



// Task 6

// let age = prompt("Введите возраст");

// if (age>18) {
//     alert('Попей пивка')
// }
// if (age<18) {
//     alert('Пей колу')
// }
// if (age=Math.random(16, 17, 18)) {
//     alert(`Можешь выкурить сигаретку, только маме не говори`)
// }

// if (age=(16, 17, 18)) {
//     alert(`Можешь выкурить сигаретку, только маме не говори`)
// }

// Task 7 

// let route = prompt('Введите направление (Юг, Север, Запад, Восток)');

// switch (route) {
//     case 'Юг':
//         alert('на юг пойдешь счастье найдешь');
//         break;
//     case 'Север':
//         alert('на север пойдешь много денег найдешь');
//         break;
//     case 'Запад':
//         alert('на запад пойдешь верного друга найдешь');
//         break;
//     case 'Восток':
//         alert('на восток пойдешь разработчиком станешь');
//         break;
//     default:
//         alert('никуда');
// }




// Task 1 
// f = a => a[0].toUpperCase() + a.substring(1,a.length).toLowerCase();
// d = arr => {
// arr = arr.split(' ');
// for (let i = 0; i < arr.length; i++) {
// arr[i] = f(arr[i])
// };
// return arr.join(' ').trim();
// }
// alert('Привет, ' + d('пОлИнА нАбЕрЕжНаЯ'));



// for(let i=0; i<20; i++) {
// console.log(i);
// i+=2;
// }
// Task 3 
//     for (let str = "#"; str.length<=7; str+="#") {
//     console.log(str);
// }