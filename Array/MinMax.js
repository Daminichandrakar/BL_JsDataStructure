
let array = new Array();
for(let i=0; i<10; i++){
    let arr = Math.floor(Math.random() * 1000) % 899 + 100;
     array.push(arr);
}
console.log("the 10 random numbers are : "+ array);
let maximum,minimum,secondMax,secondMinimum;
for(let j=0; j< array.length; j++){
    if (j==0){
        maximum=minimum=secondMax=secondMinimum= array[0];
        continue;
    }
    if ( array[j] > maximum) {
        secondMax = maximum;
        maximum =  array[j];
    } else if ( array[j] > secondMax) {
        secondMax =  array[j];
    } else if ( array[j]< minimum) {
        secondMinimum = minimum;
        minimum =  array[j];
    } else if ( array[j] < secondMinimum) {
        secondMinimum =  array[j];
    }
}
console.log("1st Maximum:"+maximum+" 2nd Maximum:"+secondMax+"\n1st Minimum:"+minimum+" 2nd Minimum:"+secondMinimum);