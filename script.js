import cardsDataGreen from './data/mythicCards/green/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataBlue from './data/mythicCards/blue/index.js';
import ancientsData from './data/ancients.js';
let last = document.querySelector('.last-card');
let easy = document.querySelector('.easy');
let normal = document.querySelector('.normal');
let hard = document.querySelector('.hard');
let difficult = document.querySelector('.difficult');
let cardNumber;
let numberOfStage = 0;
let ancientIsChecked = 0;
let allCard = [];
let testArr = [];
let difArr = [];
let n = 0;


function getRandomArbitrary(min, max) {
    return cardNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  }
/*------------------------------choose-the-ancients----------------------------------*/
const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iogsothoth = document.querySelector('.iogsothoth');
const shubniggurath = document.querySelector('.shubniggurath');
const ancients = document.querySelector('.ancients');
let anc = [azathoth,cthulthu,iogsothoth,shubniggurath];
anc.forEach(function(item, index) {
    item.setAttribute('ancientIsChecked', index)
})

ancients.addEventListener('click', checkAncients);

function checkAncients(e){
    try{
    ancientIsChecked = e.target.attributes['1']['value'];
    document.querySelectorAll('.ancients div').forEach(item => item.classList.remove('active'))
    e.target.classList.add('active');
    getCounter();
    }
    catch{}
    return ancientIsChecked
}
/*--------------------------------choose-difficult------------------------------------------*/
difficult.addEventListener('click', chooseDifficult);
let numOfDif;
function chooseDifficult (e) {
    document.querySelectorAll('.difficult div').forEach(function(item, index){
        item.classList.remove('active_two');
        item.setAttribute('levelOfDifficult', index);
    });
    try{    
    numOfDif = e.target.attributes['1']['value'];
    allCard = [];
    testArr = [];
    if (numOfDif === '0'){
        difArr = [];
        getEasyArrayOfDifficult();}
    if (numOfDif === '2'){
        difArr = [];
        getHardArrayOfDifficult();}
    getAllColodsOfCard();
    getCounter();
    ancients.removeEventListener('click', checkAncients);
    cardBack.classList.add('active_two');
    
}
    catch{
        return false
    }
    e.target.classList.add('active_two');

}

function getEasyArrayOfDifficult () {
        for (let i = 0; i < cardsDataGreen.length; i++){
            if (cardsDataGreen[i].difficulty === 'hard'){
                difArr.push(cardsDataGreen[i].id);}
        }
        for (let i = 0; i < cardsDataBrown.length; i++){
            if (cardsDataBrown[i].difficulty === 'hard'){
                difArr.push(cardsDataBrown[i].id);}
        }
        for (let i = 0; i < cardsDataBlue.length; i++){
            if (cardsDataBlue[i].difficulty === 'hard'){
                difArr.push(cardsDataBlue[i].id);}
        }
       
    }

function getHardArrayOfDifficult () {
    for (let i = 0; i < cardsDataGreen.length; i++){
        if (cardsDataGreen[i].difficulty === 'easy'){
            difArr.push(cardsDataGreen[i].id);}
    }
    for (let i = 0; i < cardsDataBrown.length; i++){
        if (cardsDataBrown[i].difficulty === 'easy'){
            difArr.push(cardsDataBrown[i].id);}
    }
    for (let i = 0; i < cardsDataBlue.length; i++){
        if (cardsDataBlue[i].difficulty === 'easy'){
            difArr.push(cardsDataBlue[i].id);}
    }
    
}


//создать массивы на проверку сложности и работатьс ними
//доделать верстку
//запретить выбордревнего после вбора сложности

/*--------------------------------created-counter---------------------------------------*/
const firstStageTitle = document.querySelector('.f_stage-title');
const secondStageTitle = document.querySelector('.s_stage-title');
const thirddStageTitle = document.querySelector('.t_stage-title');
const firstGreenStage = document.querySelector('.f_stage div:nth-child(1)');
const firstBrownStage = document.querySelector('.f_stage div:nth-child(2)');
const firstBlueStage = document.querySelector('.f_stage div:nth-child(3)');
const secondGreenStage = document.querySelector('.s_stage div:nth-child(1)');
const secondBrownStage = document.querySelector('.s_stage div:nth-child(2)');
const secondBlueStage = document.querySelector('.s_stage div:nth-child(3)');
const thirdGreenStage = document.querySelector('.t_stage div:nth-child(1)');
const thirdBrownStage = document.querySelector('.t_stage div:nth-child(2)');
const thirdBlueStage = document.querySelector('.t_stage div:nth-child(3)');
let colorOfFist = document.querySelectorAll('.f_stage div');
let colorOfSecond = document.querySelectorAll('.s_stage div');
let colorOfThird = document.querySelectorAll('.t_stage div');

function getColorStage(x) {
    firstStageTitle.style.color = 'white';
    secondStageTitle.style.color = 'white';
    thirddStageTitle.style.color = 'white';
    if(x === 0) {
        firstStageTitle.style.color = 'brown';
    }else if(x === 1) {
        secondStageTitle.style.color = 'brown';
    }else if(x === 2) {
        thirddStageTitle.style.color = 'brown';
    }
}
function getCounter() {
    n = 0;
    colorOfFist.forEach(function (item,index) {
        let colorNumber;
        if(index === 0){
            colorNumber = 'greenCards'
        }else if(index === 1) {
            colorNumber = 'brownCards'
        } else {
            colorNumber = 'blueCards'
        }
        item.textContent = ancientsData[ancientIsChecked].firstStage[colorNumber];
        n += ancientsData[ancientIsChecked].firstStage[colorNumber];
    })
    colorOfSecond.forEach(function (item,index) {
        let colorNumber;
        if(index === 0){
            colorNumber = 'greenCards'
        }else if(index === 1) {
            colorNumber = 'brownCards'
        } else {
            colorNumber = 'blueCards'
        }
        item.textContent = ancientsData[ancientIsChecked]. secondStage[colorNumber];
        n +=  ancientsData[ancientIsChecked]. secondStage[colorNumber];
    })
    colorOfThird.forEach(function (item,index) {
        let colorNumber;
        if(index === 0){
            colorNumber = 'greenCards'
        }else if(index === 1) {
            colorNumber = 'brownCards'
        } else {
            colorNumber = 'blueCards'
        }
        item.textContent = ancientsData[ancientIsChecked].thirdStage[colorNumber];
        n += ancientsData[ancientIsChecked].thirdStage[colorNumber];
    })
    return n
}
function deletedCount(z) {
    if (z === 'gree' && numberOfStage === 0) {
      let num = firstGreenStage.innerHTML;
      num = num - 1;
      firstGreenStage.textContent = num;
    }
    if (z === 'brow' && numberOfStage === 0) {
        let num = firstBrownStage.innerHTML;
        num = num - 1;
        firstBrownStage.textContent = num;
    }
    if (z === 'blue' && numberOfStage === 0) {
        let num = firstBlueStage.innerHTML;
        num = num - 1;
        firstBlueStage.textContent = num;
    }
    if (z === 'gree' && numberOfStage === 1) {
        let num = secondGreenStage.innerHTML;
        num = num - 1;
        secondGreenStage.textContent = num;
    }
    if (z === 'brow' && numberOfStage === 1) {
          let num = secondBrownStage.innerHTML;
          num = num - 1;
          secondBrownStage.textContent = num;
      }
    if (z === 'blue' && numberOfStage === 1) {
          let num = secondBlueStage.innerHTML;
          num = num - 1;
          secondBlueStage.textContent = num;
      }
    if (z === 'gree' && numberOfStage === 2) {
        let num = thirdGreenStage.innerHTML;
        num = num - 1;
        thirdGreenStage.textContent = num;
    }
    if (z === 'brow' && numberOfStage === 2) {
          let num = thirdBrownStage.innerHTML;
          num = num - 1;
          thirdBrownStage.textContent = num;
      }
    if (z === 'blue' && numberOfStage === 2) {
          let num = thirdBlueStage.innerHTML;
          num = num - 1;
          thirdBlueStage.textContent = num;
      }
}
/*--------------------------------created-arrow---------------------------------------------*/

function getColodsOfCard(x,y) {
    let map = new Array;
    for (let i=0; i < ancientsData[y][x].brownCards;) {
        getRandomArbitrary(1, 21);
        if (testArr.includes("brown" + cardNumber) || difArr.includes("brown" + cardNumber)){
            continue;
        }
        map.push("brown" + cardNumber);
        testArr.push("brown" + cardNumber);
        i +=1;
    }
    for (let i=0; i < ancientsData[y][x].greenCards;) {
        getRandomArbitrary(1, 18);
        if (testArr.includes("green" + cardNumber) || difArr.includes("green" + cardNumber)){
            continue;
        }
        map.push("green" + cardNumber);
        testArr.push("green" + cardNumber);
        i +=1;
    }
    for (let i=0; i < ancientsData[y][x].blueCards;) {
        getRandomArbitrary(1, 12);
        if (testArr.includes("blue" + cardNumber) || difArr.includes("blue" + cardNumber)){
            continue;
        }
        map.push("blue" + cardNumber);
        testArr.push("blue" + cardNumber);
        i +=1;
    }
    allCard.push(map)
    
}

function getAllColodsOfCard(){
getColodsOfCard('firstStage', ancientIsChecked);
getColodsOfCard('secondStage', ancientIsChecked);
getColodsOfCard('thirdStage', ancientIsChecked);
}
/*-------------------------------showed-and-splice-------------------------------------------*/

let cardBack = document.querySelector('.deck')
function lengthOfStage (x){
    if (allCard[0].length !== 0){
        return allCard[0].length;
    } else if (allCard[1].length !== 0){
        return  allCard[1].length;
    }else{
        return allCard[2].length;
    }
}

function showed() {
    try {getRandomArbitrary(0, lengthOfStage()-1);
    if (allCard[numberOfStage].length === 0) {
        numberOfStage +=1
    }
    if (numberOfStage === 3){
        last.textContent = 'Push and play again.';
        last.classList.add('active');
        cardBack.classList.remove('active_two')
        last.style.background = 'black';
        last.style.color = 'white';
        last.style.fontSize = '50px';
        last.style.textAlign = 'center';
        last.style.lineHeight = '80px';
        last.style.cursor = 'pointer'
        last.addEventListener('click', function(){window.location.reload()})
    }
    let z = allCard[numberOfStage][cardNumber].substr(0, 4)
    deletedCount(z)
    last.style.backgroundImage = `url(./assets/MythicCards/${allCard[numberOfStage][cardNumber]}.png)`;
    last.style.width = '200px';
    allCard[numberOfStage].splice(cardNumber,1);
    getColorStage(numberOfStage);
    difficult.removeEventListener('click', chooseDifficult);
    difficult.style.background = 'brown';
}
    catch{}
}

cardBack.addEventListener('click', showed);

