// let personBirthmonth = new Map();
// for(let person = 1; person<=50 ; person++)
// {
//     let birthmonth = (Math.floor(Math.random() * 100) % 12) + 1;
//     personBirthmonth.set(person, birthmonth);
// }
// for(let month = 1; month <= 12; month++)
// {
//     let sameMonth = [...personBirthmonth.entries()].filter(([a,b]) => b == month).map(([c,d]) => c);
//     console.log("People with birthday in month " + month);
//     console.log(sameMonth);
// }

// let map = new Map();
// for (let person = 1; person <= 50; person++) 
// {
//     let birthMonth = Math.floor(Math.random() * 11);
//     birthMonth++;
//     if (map.has(birthMonth)) 
//     {
//         map.get(birthMonth).push(person);
//     }
//     else 
//     {
//         map.set(birthMonth, [person]);
//     }
// }
// for (let [key, value] of map) 
// {
//     console.log('People with birthday in month ' + key + ' : ' + String(value));
// }


let getBirthmonthNumber = () => Math.floor(Math.random()*12)+1;
let getBdayMonth = () =>
{
    console.log("Uc2");
    //map to store month and individuals having bday on that month
    let bDayMap = new Map();
    for(let i=0;i<50;i++)
    {
        let month = getBirthmonthNumber();
        let personsHavingSameBdayMonth = '';
        //check whether it already has values
        if(bDayMap.has(month))
            personsHavingSameBdayMonth = bDayMap.get(month);
        //appending old value with new one
        personsHavingSameBdayMonth = personsHavingSameBdayMonth + (`${i},`);
        //seeting it to dictionary
        bDayMap.set(month,personsHavingSameBdayMonth);
    }
    console.log(bDayMap);
}
getBdayMonth();