const colorCell = {
        'red' : 0,
        "yellow" : 0,
        "green" : 0,
        "blue" : 0,
        "magenta" : 0,
        "orange" : 0,
        "gray" : 0,
        "black" : 0
    };

const colorArray = ['red',"yellow","green","blue","magenta", "orange","gray","black"];

const fieldCards = [
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    ];

createField();

//Запуск игры
function startPlay(){
    alert("Start game");
    console.log(arrayColor);
    //placedColor();
    //placedColor();
}


function createField(){ 
    let colorArray1 = colorArray.slice();
    //placedColor();
    let colorArray2 = colorArray.slice();
    let r = (func(colorArray1,getRandomInt(0,colorArray1.length-1)) + ";" + func(colorArray2,getRandomInt(0,colorArray2.length-1))).split(";");
    //let resarray = func(colorArray1,getRandomInt(0,colorArray1.length-1));
    //resarray += ";";
    //resarray += func(colorArray2,getRandomInt(0,colorArray2.length-1));
    //let r = resarray.split(";");
    console.log(resarray);
    console.log(r);
    
    document.querySelector('#play-field').innerHTML='';
    for(let i=0; i<fieldCards.length;i++){
        let row = fieldCards[i];
        for(let j=0; j<row.length; j++){
            document.querySelector('#play-field').innerHTML += `<div class="block-cell" colorIndex = "${r[4*i+j]}" data-x="${i}" data-y="${j}"></div>`;
        }
    }

    document.querySelectorAll(".block-cell").forEach(element => {
        element.onclick = openCell;
    });
}

//Распределение цветов по карточкам
function placedColor(){
    
    let keys = Object.keys(colorCell);
    for(let k=0; k<keys.length;k++){
        fieldCards[getRandomInt(0,3)][getRandomInt(0,3)] = keys[k];
    }
}

function func(arrayColor,element){
    if(arrayColor.length === 1){
        return `${arrayColor[0]}`;
    } else {
        let colorName = arrayColor[element];
        arrayColor.splice(element,1);
        let newElement = getRandomInt(0,arrayColor.length-1);
        return `${colorName};${func(arrayColor, newElement)}`;
    }
}

//Целое случайное число из указанного диапазона
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorPalette(arrayColor,posIndex){
    let arrayNew = [];
    arrayNew.push();
    return arrayNew;
}
