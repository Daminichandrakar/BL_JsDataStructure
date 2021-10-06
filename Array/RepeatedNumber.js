let getRepeatedNumber = () =>
{
    console.log("repeated numbers");
    let numArr = new Array();
    for(let i=1;i<=100;i++){
        if(i%11==0){
            numArr.push(i);
        }
    }
    console.log(numArr);

}
getRepeatedNumber();