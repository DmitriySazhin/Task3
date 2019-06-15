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

let counterOpenCell = 0;
let colorOpenCell = '';                    
createField();

//Запуск игры
function startPlay(){
    alert("Start game");
    document.querySelectorAll('.block-cell').forEach(element => {
        if(element.classList.length > 1){
            element.classList.remove(element.dataset.color);
            counterOpenCell = 0;
            colorOpenCell = '';
            element.onclick = openCell;
        };
    });
    placedColor();

}


function createField(){ 
    document.querySelector('#play-field').innerHTML='';
    for(let i=0; i<fieldCards.length;i++){
        let row = fieldCards[i];
        for(let j=0; j<row.length; j++){
            document.querySelector('#play-field').innerHTML += `<div class="block-cell" data-color = "" data-x="${i}" data-y="${j}"></div>`;
        }
    }
    placedColor();
    document.querySelectorAll(".block-cell").forEach(element => {
        element.onclick = openCell;
    });
}

//Распределение цветов по карточкам
function placedColor(){
    //let colorArray1 = colorArray.slice();
    //let colorArray2 = colorArray.slice().reverse();
    let colorArray1 = [...colorArray.reverse(), ...colorArray];
    //let r = (func(colorArray1,getRandomInt(0,colorArray1.length-1)) + ";" + func(colorArray2,getRandomInt(0,colorArray2.length-1))).split(";");
    //let r = [...func(colorArray1,getRandomInt(0,colorArray1.length-1)).split(";"), ...func(colorArray2,getRandomInt(0,colorArray2.length-1)).split(";")];
    let r = func(colorArray1, getRandomInt(0,colorArray1.length-1)).split(";");
    console.log(r);
    let i = 0;
    document.querySelectorAll('.block-cell').forEach(element => {
        element.dataset.color = r[i];
        i += 1;
    });
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

function openCell(){
    let cell = this;
    cell.classList.add(cell.dataset.color);
    if (counterOpenCell === 1) {
        console.log(counterOpenCell, colorOpenCell);
        if(colorOpenCell === cell.dataset.color){
            //cell.classList.add(cell.dataset.color);
            console.log(cell.dataset.color);
            cell.onclick = '';
            counterOpenCell = 0;
            colorOpenCell = '';
        } else {
            console.log(counterOpenCell, colorOpenCell);
            console.log(cell.dataset.color);
            //cell.classList.add(cell.dataset.color);
            document.querySelector(`div[class~="${colorOpenCell}"]`).onclick = openCell;
            document.querySelector(`div[class~="${colorOpenCell}"]`).classList.remove(colorOpenCell);
            counterOpenCell = 0;
            colorOpenCell = '';
            cell.classList.remove(cell.dataset.color);
            cell.onclick = openCell;
        }
    } else {
        console.log(counterOpenCell, colorOpenCell);
        console.log(cell.dataset.color);
        counterOpenCell += 1;
        colorOpenCell = cell.dataset.color;
        //cell.classList.add(cell.dataset.color);
        cell.onclick = '';
    }
    //let cell = this;
//    console.log(cell);
//    console.log(cell.dataset.color);
//    cell.classList.add(cell.dataset.color);
}