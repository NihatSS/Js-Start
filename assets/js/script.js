"use strict"

// //1) n ve m ededleri var. n ve m ededleri arasindaki tek ededleri ekranda gosterin.

// let n = 20;
// let m = 30;

// for (let index = n; index <+ m; index++) {
//     if (index%2==1) {
//         console.log(index);
//     }
// }

// //2) arrayin icindeki elementlerin cemini tapmaq.

// let nums = [1,2,3,4,5,6,7];
// var sum = 0;
// for (let index = 0; index < nums.length; index++) {
//     sum += nums[index]
// }

//  console.log(sum)


// //3) arrayin icerisindeki cut ededlerin sayini tapmaq

// nums = [1,2,3,4,5,6,7];
// let count = 0;

// for (let index = 0; index < nums.length; index++) {
//         if (nums[index]%2==1) {
//             count++;
//         }    
// }

// console.log(count)


// // 4) ededin faktorialini hesablamaq

// var num = 5;
// let factorial = 1;
// for (let index = 1; index <= num; index++) {
//     factorial *= index;
// }

// console.log(factorial);

// //5) ededin sade ve ya murekkeb oldugunu tapin

// let num = 100;
// let count = 0;
// if (num<=1) {
//     console.log("Ne sade ne murekkeb");
// }
// else{
//     for (let index = 1; index <= num; index++) {
//         if (num % index == 0) {
//             count++;
//         }
//     }
//     if (count==2) {
//         console.log("Sade ededdir");
//     }
//     else{
//         console.log("Murekkeb ededdir")
//     }
// }

// //6) arrayin icinden 6-e modu 4-den boyuk olanlarin sayini tapin.

// var nums = [1,2,3,4,5,6,7,8,9,10];
// let count = 0;

// for(let index = 0; index < nums.length; index++) {
//     if (nums[index] % 6 == 4) {
//         count++
//     }
// }

// console.log(count)

////student objectleriniz olacaq. Studentlerin name, surname,email,age keyleri olacaq.

let student1 = {
    name: "Nihat",
    surname: "Soltanov",
    email: "nihat@gmil.com",
    age: 18
};

let student2 = {
    name: "Ferdi",
    surname: "Ismayilzade",
    email: "ferdi@gmil.com",
    age: 18
};

let student3 = {
    name: "Valeh",
    surname: "Meherremov",
    email: "valeh@gmil.com",
    age: 19
};

let student4 = {
    name: "Fadile",
    surname: "Kerimli",
    email: "nihat@gmil.com",
    age: 19
};

let student5 = {
    name: "Terxan",
    surname: "Zeynalabdiyev",
    email: "nihat@gmil.com",
    age: 25
};

let students =[student1,student2,student3,student4,student5];

////7) Studentlerin yashlarinin cemini tapin.

// let sum = 0;

// students.forEach(element => {
//     sum += element.age;
// });

// console.log(sum);

//8) Studentlerin yashlarinin ortalamasini tapin.

let average = 0;

students.forEach(element => {
    average += element.age;
});

console.log(average/students.length)


//9) Studentlerin sayi ile yashlarinin ceminin hasilini tapin.

let sum = 0;
students.forEach(element => {
    sum += element.age
});

console.log(sum*students.length)