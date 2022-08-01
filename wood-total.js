functon woodTotal(a,b,c){
    console.log(a,b,c);
    // const perChairWood = 3;
    // const perTableWood = 6;
    // const perBedWood = 12;
    // let chairWood = perChairWood * koytaChair;
    // let tableWood = perTableWood * koytaTable;
    // let bedWood =   perBedWood * koytaBed;

    // let totalWood = chairWood + tableWood + bedWood;

    // return totalWood
}

var result = woodTotal(3,6,10);
console.log(result);

let greetings = "parul";
function reverse(text){
    let reverse = ""
    for(const char of text){
        console.log(char);
        reverse = char + reverse
    }
}

var reversed = reverse(greetings);
console.log(reversed);