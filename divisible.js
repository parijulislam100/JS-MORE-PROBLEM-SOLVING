for(var i = 1; i <= 50; i++){
if(i % 3== 0  && i % 5 == 0){
    console.log("foobal");
}
else if(i % 3 == 0){
    console.log("foo")
}
else if(i % 5 == 0){
    console.log("bal")
}
else{
    console.log(i);
}
}

// module 22.7 (array of object)
let phones = [
    {name :"samsung A3", price :7000,camera: 8, Storage:12},
    {name :"Realme Narzo 50", price :17000,camera: 20, Storage:40},
    {name :"xiomi poco M3", price :32700,camera: 32, Storage:55},
    {name :"Nokia 1250", price :1200,camera: 2, Storage:1},
]

let lowprice = phones[0];
for(const phone of phones){
    if(phone.price <lowprice.price){
        lowprice = phone
    }
}
console.log(lowprice);

let electronice =[
    {name : "tv", price:20000,inch :20},
    {name :"fridge", price :30000,capacity:288},
    {name :"AC", price:50000,weight:1},
    // {name :"mobile", price:2000,storage:1}
]
let chipset = electronice[0]
for (const electric of electronice){
   if( electric.price<chipset.price){
        chipset = electric
   }
}
console.log(chipset);

// module -22.8 ,Calculate the total cost of the products in a shopping cart;
let smartPhones = [
    {name :"samsung A3", price :7000,camera: 8, Storage:12, quantity:2},
    {name :"Realme Narzo 50", price :17000,camera: 20, Storage:40 ,quantity:3},
    {name :"xiomi poco M3", price :32700,camera: 32, Storage:55 ,quantity:1},
    {name :"Nokia 1250", price :1200,camera: 2, Storage:1,quantity:5},
]
let sum = 0;
for(const phone of smartPhones){
    totalPrice= phone.price * phone.quantity;
    sum = totalPrice + sum;


}
console.log(`total price:`,sum);


let shoppingMarket=[
    {name:"shirt",price :500 ,quantity:2},
    {name:"pant", price :500 ,quantity:2},
    {name:"shoe",price:700 ,quantity:2}
]
var total = 0;
for(const shopping of shoppingMarket){
    var price = shopping.price * shopping.quantity;
    total = price + total
}
console.log(`total is:`, total);

// 22-9 Traveling in a Jungle and counting wild animals
function animalCount(miles){
    let animalDensityPerFirst10Mile = 10;
    let animalDensityPerSecond10Mile = 50;
    let animalDensityPerRestMile= 100;
    if(miles<=10){
        count = miles*10
    return count ;

    }
    else if (miles<= 20){
        var first10 = 10*animalDensityPerFirst10Mile
        restMiles = miles - 10;
        second10 =restMiles*animalDensityPerSecond10Mile
        total = first10 + second10
        return total;
    }
    else{
        var first10 = 10 * animalDensityPerFirst10Mile;
        var second10 = 10 * animalDensityPerSecond10Mile;
        restMiles = miles - 20;
        var restAnimals =  restMiles * animalDensityPerRestMile;
        total = first10 + second10 + restAnimals;
        return  total;
    }
    
}

var animals = animalCount(25);

console.log(`total animail is:`, animals);



let num = 7;
while (num <= 19){
    if(num % 2 != 0){
        console.log(num)
    }
    num++
}


console.log(    `another one recap`);

let laptops = [
    {name :"Asus", price :50000, Ram : 2, Hdd :320},
    {name :"Hp", price :45000, Ram :3, Hdd : 325},
    {name :"Lenovo", price:55000,Ram :4, Hdd :350},
    {name:"Macbook",price :100000, Ram:8,  Hdd :1000},
    {name:"Dell", price :35000,Ram :2, Hdd :3200}

]
let chipPrice = laptops[0];
for(const laptop of laptops){
    if(laptop.price < chipPrice.price ){
        chipPrice = laptop;
    }
}
console.log( `chip price laptop is : `, chipPrice);

let Fridges = [
    {name :"Walton", price :30000,capacity :288},
    {name :"LG", price :40000,capacity:300},
    {name :"JOMUNA",price :35000,capacity:288},
    {name :"Minister",price :27000,capacity:275},
    {name :"Samsung",price :50000,capacity:400}
]
let chipFridge = Fridges[0];
for(const Fridge of Fridges){
    if(Fridge.price < chipFridge.price){
        chipFridge = Fridge;
    }
}
console.log( `chipFridge :`, chipFridge);

let shopings = [
    {name:"shirt", height:"xl", price:450},
    {name:"Pant", height:"xl", price:500},
    // {name:"shoe", price:750},
    {name:"T-shirt",price:100,height:"xl"}
]
let lowPrice=shopings[0];
for(const shoping of shopings){
    if(shoping.price <lowPrice.price ){
        lowPrice = shoping;
    }
}
console.log(lowPrice);

console.log(`animal count`);

function animalCount(miles){
    var first10AnimalDensity = 10;
    var second10AnimalDensity = 50;
    var restMilesAnimalDensity = 100;
    if(miles <= 10){
        count= miles * first10AnimalDensity
        return count
    }
    else if(miles <= 20){
        var first10 = 10 * first10AnimalDensity;
        restMiles= miles - 10;
        var restMilesAnimals = restMiles * second10AnimalDensity
        count = first10 + restMilesAnimals;
        return count;
    }
    else{
        first10 = 10 * first10AnimalDensity;
        second10 = 10 * second10AnimalDensity;
        restMiles = miles - 20;
        restMilesAnimals = restMiles * restMilesAnimalDensity
        count = first10 + second10 +restMilesAnimals
        return count;

    }
  
}

var totalAnimal = animalCount(27);
console.log(`toal animal is :`, totalAnimal);

console.log(`second time animal count`);
function findAnimal(miles){
    let first10AnimalDensity = 10;
    let second10AnimalDensity = 50;
    let restMilesAnimalDensity = 100;
    if(miles <= 10){
        let animalCount = miles * first10AnimalDensity
        return animalCount;
    }
    else if(miles <= 20){
        let first10MilesAnimalCount = 10 * first10AnimalDensity;
        let restMiles = miles - 10;
        let restMileAnimalCount = restMiles * second10AnimalDensity
        let totalAnimalCount = first10MilesAnimalCount + restMileAnimalCount;
        return totalAnimalCount;
    }
    else{
        let first10MilesAnimalCount = 10 * first10AnimalDensity;
        let second10MilesAnimalCount = 10 * second10AnimalDensity;
        restMiles = miles  - 20;
        let restMilesAnimal = restMiles * restMilesAnimalDensity;
        let totalAnimalCount = first10MilesAnimalCount + second10MilesAnimalCount + restMilesAnimal;
        return totalAnimalCount;


    }
}

var totalAnimal = findAnimal(25);
console.log(`total animal is : `, totalAnimal);

console.log(`divisible 3 and 5`);

for(let i = 1; i <= 30; i++){
    if( i % 3 == 0 && i % 5 == 0){
        console.log("foolbal");
    }
    else if( i % 3 == 0){
        console.log("foll")
    }
    else if( i % 5 == 0){
        console.log("bal")
    }
    
    else{
        console.log(i);
    }
}

console.log(`third program`)
for( var i = 1; i <= 100; i++){
    if( i % 3 == 0 && i % 5 ==0) {
        console.log("chaterball")
    }
    else if ( i % 3 == 0){
        console.log("chat");
    }
    else if ( i % 5 == 0){
        console.log("ball");
    }
    else {
        console.log(i);
    }
}

console.log(` total object in array`);

let androidPhones = [
    {name : " walton primo10" ,storage:2, price:10000, phoneQuantity:5},
    {name: "Xiomai Node10 ",storage:4, price :15000,phoneQuantity:10},
    {name: "reale narzo50",storage :3,price:12000,phoneQuantity:7},
    {name:"iphone12",storage:10,price:10000,phoneQuantity:12},
    {name:"nokia1200",storage:0.512,price:1700,phoneQuantity:15}

];


for(const androidPhone of androidPhones){
    let phoneMoneyCount = androidPhone.price * androidPhone.phoneQuantity;
    let myKhoros = 0 ;
    myKhoros = myKhoros + phoneMoneyCount;

}
console.log(`total khoros  is: `, myKhoros);