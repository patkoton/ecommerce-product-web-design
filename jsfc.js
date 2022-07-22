let myAge = 25;
let humanDogRatio = 5
let myDogAge = myAge * humanDogRatio
//console.log(myDogAge);



let bonusPoints = 50;
bonusPoints = bonusPoints - 25;
bonusPoints = bonusPoints + 45;
//console.log(bonusPoints);



const yogga = () => {
    //console.log(42)
}
yogga();



let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

const total = () => {
    //console.log(lap1 + lap2 + lap3)
}
total();



let lapCompleted = 0;
const lapC = () => {
    lapCompleted = lapCompleted + 1
    //console.log(lapCompleted)
}
lapC();
lapC();
lapC();

//document.getElementById("count-el").innerHTML = 5

let count = 0;

let countEl = document.getElementById("count-el");
const incrementBtn = () => {
    count = count + 1;
    countEl.innerHTML = count;
}
incrementBtn();