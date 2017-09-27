let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

function example1(){

}

function example2(){
    let total=0;
    for(let b=0;b<bits.length;b++){
        total = total+ bits[b];
        //new = old + current #
    }
    return total;
}

function example3(){

}

function example4(){

}

//Creating test code
function main(){
    console.log(example1());
    console.log("The total # of bits is "+example2());
    console.log("Your average ping for internet is "+example3());
    console.log("The first pitch thrown above 95 was pitch-index "+example4());
}
//run test code with CTRL + SHIFT + B
main();
