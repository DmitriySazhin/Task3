const colorCell = ["red", "yellow", "green", "blue", "magenta", "orange", "gray", "black"];

//Запуск игры
function startPlay(){
    alert("Start game");
    placedColor();
}

//Распределение цветов по карточкам
function placedColor(){
    let assignColor = [];
    let cell = document.querySelectorAll("td");
    let cancel = false;
    let idColor = -1;
    let nameColor = "";
    let 

    cell.forEach(c =>{
        idColor = getRandomInt(0,7);
        nameColor = colorCell[idColor];
        do {
            if (nameColor in assignColor){
                if (assignColor[nameColor] === 2){
                    idColor = getRandomInt(0,7);
                    nameColor = colorCell[idColor];
                    cancel = true;
                } else {
                    assignColor[nameColor] = 2;
                    c.className = nameColor;
                    c.idcolor = idColor;
                    cancel = false;
                }
            } else {
                assignColor[nameColor] = 1;
                c.className = nameColor;
                c.idcolor = idColor;
                cancel = false;
            }
        } while(cancel);
    });
}

//Целое случайное число из указанного диапазона
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}