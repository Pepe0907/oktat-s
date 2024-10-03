//hello world
//hello palacsinta

// 1.feladat
let a 
a = 10
let b 
b = 22
let c 
c = a + b

// 2.feladat
let red
red=3
let blue
blue=5
let green
green=red
red=blue
blue=green

// 3. feladat
let a
a=30
b=((a%2)===0) && ((a%5)===0)

// 4. feladat
let a
a=[10,20,30,40,50]
let b
b= a[0]+a[1]+a[2]+a[3]+a[4]

//5. feladat 
let a
a=10
let b
b=20
let c
c=30
let number
number={a,b,c}
console.log (number.a,number.b,number.c)
// Várom a többi feladatot!

//Új 3. feladat
let array=[5,6,7,8]
let table
table=array[0]
array[0]=array[3]
array[3]=table
table=array[1]
array[1]=array[2]
array[2]=table
//Ezzel elvoltam egy darabig

//4.feladat
let obj={}
obj.elso=3
obj.masodik=6

//5.feladat
let table
table=obj.elso
obj.elso=obj.masodik
obj.masodik=table

//6.feladat
let tomb
tomb=['a','b','c','d','e']
let vol
vol=2
vol=tomb[vol]

//7.feladat
let recept = [
    {cim: 'Palacsinta', ido: 20},
    {cim: 'Töltöttkaposzta', ido: 60},
      {cim: 'Vajaskenyer', ido: 10}
];

//8.feladat
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
array[1][1] = 10

//9.feladat
let a=321
let b= ((a%2)===0 && (a%5)===0)

//10.feladat
let array=[1, 2, 3, 4, 5]
    let sum=array[0] + array[1] + array[2] + array[3] + array[4];

    //11.feladat
let recept='palacsinta'
let töltelek='lekvaros'
let serpenyö=28
let szakacskönyv={
    recept:recept,
    töltelek:töltelek,
    serpenyo:serpenyo
}
console.log(szakacskonyv.recept, szakacskonyv.töltelek, szakacskonyv.serpenyo)

//12.feladat
let lakcim={
    iranyitoszam:'3535' ,
    települes:'Miskolc' ,
    utca:'Bekes utca',
    hazszam:'1'
}
console.log(lakcim)

//13.feladat
let a = 3
let b = 5
let kerület = (a+b)*2
let terület = a*b 

//14.feladat
let array=[1, 2, 3]
let brray=[4, 5, 6]
let crray=[array[0]+brray[0],array[1]+brray[1],array[2]+brray[2]]

//2.fogas 1feladat
let a=10
let b=5
if (a === b) {
    console.log('Megegyeznek') ;
 } else {
    console.log ('Nem egyeznek meg')
 }

 //2/2 feladat
 for (let a = 1; a < 100; a++) {
    if (a % 5 === 0) {
        console.log(a);
    }
}
//2/3 feladat

let sum=0
for ( let a=1 ; a<100 ; a++) {
    sum += a ; 
}

//2/4 feladat
for ( let a=1 ; a <= 10 ; a++) {
    console.log( a*a) 
}

//2/5 feladat  ....ez nem teljesen világos...

let a = [19, 32, 2, 31, 41];
let max = a[0];
for (let index = 1; index < a.length; index++) {
    if (max < a[index]) {
        max = a[index];
    }
}
console.log(max);

//2/6 feladat
let a = [1, 2, 3, 4, 5];
let count = 0;
for (let index = 0; index < a.length; index++) {
    if (a[index] === 4) {
        count++;
    }
}
console.log(count);

//2/7 feladat dollar jel?
let array = [15, 32, 9, 16, 25];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
        console.log(`${array[index]} osztható 2-vel`);
    }
    if (array[index] % 3 === 0) {
        console.log(`${array[index]} osztható 3-mal`);
    }
    if (array[index] % 5 === 0) {
        console.log(`${array[index]} osztható 5-tel`);
    }
}

//2/8 feladat
let a = [10, 9, 4, 3, 8];
for (let index = 1; index <= a.length; index++) {
    console.log(a[a.length - index]);
}

//2/9 feladat ?

let array = [1, 2, 3, 4, 5, 6];
if (array.length % 2 === 0) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
} else {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

//2/10 feladat

let a = 0;
let b = 1;
while (b < 100) {
    console.log(b);
    b += a;
    a = b - a;
}

//2/11 feladat ezt őszintén értem legalább
//a
let array = [22, 1, 7, 34, 11, 2, 3, 99, 67, 26];
for (let index = 0; index < array.length; index += 2) {
    console.log(array[index]);
}

//b
let array = [22, 1, 7, 34, 11, 2, 3, 99, 67, 26];
for (let index = 1; index < array.length; index += 2) {
    console.log(array[index]);
}

//2/12 feladat

let a1 = [5, 4, 3, 2, 1];
let a2 = [5, 4, 3, 2, 1];
let sum = [];
for (let index = 0; index < a1.length; index++) {
    sum.push(a1[index] + a2[index]);
} console.log(sum);

//2/13 feladat
let matrix = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];
for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
        console.log(matrix[x][y]);
    }
}

//2/14 feladat

let array = [];
while (array.length < 10) {
    array.push(true);
} console.log(array)



