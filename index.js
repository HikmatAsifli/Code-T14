// ! Task-1 Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir.

// function calculateMonthlyPayments(loanAmount, durationMonths) {
    
//     let monthlyPayment = parseInt(loanAmount / durationMonths);
//     let remainingAmount = loanAmount % durationMonths;
    
//     for (let i = 1; i <= durationMonths; i++) {
//         if (i === durationMonths) {
//             console.log(`${i}-ci ay ${monthlyPayment + remainingAmount} manat`);
//         } else {
//             console.log(`${i}-ci ay ${monthlyPayment} manat`);
//         }
//     }
// }

// calculateMonthlyPayments(1000, 3);

// ! Task-2 Reqemlerden ibaret arrayda duplicate reqemi qaytarin (bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. Arrayde yalniz bir eded duplicate olacaq)

// function duplicateReqemTap(array) {
//     let find = [];
//     for (let reqem of array) {
//         if (find[reqem]) {
//             return reqem;
//         } else {
//             find[reqem] = true;
//         }
//     }
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 23];
// console.log("Duplicate reqem:", duplicateReqemTap(array));





// ! Task-3 Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

function convertCelsius(fahrenheit) {
    return  ((fahrenheit - 32) *  5/9);
}
console.log(convertCelsius(68));