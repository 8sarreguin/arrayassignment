let oz = [8,12,16,20,24,32];
let sizes = ["xs","s","m","l",'xl'];
let prices = [4.99,9.99,19.99,49.99];
let speeds = [93,99,95,96,97,99];
let pings = [45,60,120,80,155,160,220,110];
let bits = [1,1,0,1,0,0,1,0,0,1];

let turtle = [16, 71, 101, 111, 118];
let tadpole = [10240, 10481, 254, 1625, 2056];

function adding(){

    let tetra = [];

    for(let t = 0; t< turtle.length; t++){
        let x = tadpole[t] + turtle[t];
        tetra.push(x)
    }
        return tetra;
}

function glue(){

    let thingy = [];
    for(let g = 0; g < turtle.length;g++){
        thingy.push(turtle[g]);
    }
    for(let h = 0; h < turtle.length;h++){
        thingy.push(tadpole[h]);
    }
    return thingy;
}

function example1(list, amount){

    let newOz = [];

    for(let z = 0; z < list.length; z++){
        if(list[z] >= amount){
            newOz.push(list[z]);
        }
    }
    return newOz;

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

    let avg = 0;
        for(p=0; p<pings.length; p++){
            avg=avg+pings[p];
        }
        return avg/pings.length;

}

function example4(){
    for(s=0; s<speeds.length; s++){
        if(speeds[s]>95){
            return speeds[s]
        }
    }
}

//Creating test code
function main(){
    console.log(example1(oz, 20));
    console.log("The total # of bits is "+example2());
    console.log("Your average ping for internet is "+example3());
    console.log("The first pitch thrown above 95 was pitch-index "+example4());
    console.log(adding());
    console.log(glue());
}
//run test code with CTRL + SHIFT + B
main();
