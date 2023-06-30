console.clear();

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

// const a = 10;
// const b = 10;

// function palyginimas (a,b){
//     if(a > b){
//         return `Skaicius a: ${a} yra didesnis uz skaiciu b: ${b}`;
//     }else if(a < b){
//         return `Skaicius b: ${b} yra didesnis uz skaiciu a: ${a}`;
//     }else {
//         return `Skaiciai a: ${a} ir b: ${b} yra lygus`;
//     }
// }
// console.log(palyginimas(a, b));

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

// for(let i = 0; i <= 10; i = i + 2){
//     console.log(i);
// }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

// for(let i = 0; i < 5; i++){
//     let k = 0;
//     k = Math.floor(Math.random() * 10);
//     console.log(k);
// }

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

// let k = '';

// while (k < 10) {
//     console.log(k = Math.floor(Math.random() * 10));
//     if(k === 5){
//         break;
//     }
//   }

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

//Masyvo sukurimas su for
// let arr = [];
// for(let i = 0; i < 30; i++){
//     i > 10 ? arr.push(i) : 0;
// }

//Masyvo sukurimas rankiniu budu
// const arr = [5, 101, 50, 5, 60, 50, 4, 99, 5];

// const biggestNumber = arr => {
//     let biggestN = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(biggestN < arr[i]){
//             biggestN = arr[i];
//         }
//     }
//     return biggestN;
// }
// console.log(arr);
// console.log(biggestNumber(arr));

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

// const stringArray = [];
// let stringCountA = 0;
// let stringCountB = 0;
// let stringCountC = 0;
// let stringCountD = 0;

// for(let i = 0; i <= 100; i++){
//     stringArray.push(Math.floor(Math.random() * 4));
    
//     if(stringArray[i] === 0){
//         stringArray[i] = 'A';
//         stringCountA++;
//     }
//     if(stringArray[i] === 1){
//         stringArray[i] = 'B';
//         stringCountB++;
//     }
//     if(stringArray[i] === 2){
//         stringArray[i] = 'C';
//         stringCountC++;
//     }
//     if(stringArray[i] === 3){
//         stringArray[i] = 'D';
//         stringCountD++;
//     }
// }

// console.log(stringArray);
// console.log(stringCountA);
// console.log(stringCountB);
// console.log(stringCountC);
// console.log(stringCountD);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

// function lygineSuma (a, b) {
//     let skaiciuSuma = 0;
//     let arrIlgiuSuma = 0;
//     if(typeof a === 'number' && typeof b === 'number'){
//         skaiciuSuma = a + b;
//         if(skaiciuSuma % 2 === 0){
//             return `Skaiciu suma: ${skaiciuSuma}`;
//         }else{
//             return `Skaiciu suma nelygine`;
//         }
//     }else if(typeof a === 'object' && typeof b === 'object'){
//         arrIlgiuSuma = a.length + b.length;
//         if(arrIlgiuSuma % 2 === 0){
//             return `Masyvu ilgiu suma: ${arrIlgiuSuma}`;
//         }else{
//             return `Masyvu ilgiu suma nelygine`;
//         }
//     }else {
//         return `Kintamieji turi buti abu skaiciai arba masyvai`;
//     }
// }

// console.log(lygineSuma([2, 2], [2, 2]));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//     skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

// function pirminisSkaicius(a) {
//     if (typeof a !== 'number' || !isFinite(a)) {
//         return 'Skaicius turi buti normalus';
//     }

//     for(let i = 2; i < a; i++){
//         if(a % i === 0){
//             return `Skaicius nera pirminis`;
//         }
//     }
//     return `Skaicius ${a} yra pirminis`;
// }

// console.log(pirminisSkaicius(5));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

// function telefonoNumeris (a) {
//     let numeris = "(XXX) XXX-XXXX";
//     if(typeof a !== 'number' && a.length !== 10){
//         return `${a} yra netinkamo formato ar ilgio`;
//     }
//     for(let i = 0; i < a.length; i++){
//         numeris = numeris.replace('X', a[i]);
//     }
//     return numeris;
// }

// console.log(telefonoNumeris([5,5,5,5,5,5,5,5,5,5]));
// console.log(telefonoNumeris([5,5,5,5,5,5]));
// console.log(telefonoNumeris([]));
// console.log(telefonoNumeris('stringas'));
// console.log(telefonoNumeris(true));
// console.log(telefonoNumeris(false));
