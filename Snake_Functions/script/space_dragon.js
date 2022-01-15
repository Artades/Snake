//                                                                        Snake on functions 




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");



//Game
let tileSize = 30;
let titleCount = canvas.width / tileSize;


let velocity = {
    x: 0,
    y: 0,
}

let food = {
    x: 15,
    y: 15,
}

const snake = [];

let snakeHead = {
    x: 10,
    y: 10,
}

let snakeTailCount = 1;

function drawWorld() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'darkgreen';
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * tileSize, snake[i].y * tileSize, tileSize - 2, tileSize - 2);
        if (snake[i].x === snakeHead.x && snake[i].y === snakeHead.y) {
            snakeTailCount = 1;

        }

    }

}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize - 2, tileSize - 2);
}

function updateSnakeHead() {
    snakeHead.x += velocity.x;
    snakeHead.y += velocity.y;
    //По оси X:
    if (snakeHead.x < 0) {
        snakeHead.x = titleCount - 1;
    }
    if (snakeHead.x > titleCount - 1) {
        snakeHead.x = 0;
    }
    //По оси Y:
    if (snakeHead.y < 0) {
        snakeHead.y = titleCount - 1;
    }
    if (snakeHead.y > titleCount - 1) {
        snakeHead.y = 0;
    }


}

function updateSnakeBody() {
    snake.push({
        x: snakeHead.x,
        y: snakeHead.y,
    })
    while (snake.length > snakeTailCount) {
        snake.shift()
    }
};

function eatFood() {
if(food.x === snakeHead.x && food.y === snakeHead.y){
    snakeTailCount ++;
    food.x = Math.floor(Math.random() * titleCount);
    food.y = Math.floor(Math.random() * titleCount);

}
};

const keyDownHandlers = {
    'ArrowLeft': () =>{
        velocity.x = -1;
        velocity.y = 0;
    },
    'ArrowRight': () =>{
        velocity.x = 1;
        velocity.y = 0;
    },
    'ArrowUp': () =>{
        velocity.x = 0;
        velocity.y = -1;
    },
    'ArrowDown': () =>{
        velocity.x = 0;
        velocity.y = 1;
    },

};

function onKeyDown(event) {
    if(keyDownHandlers.hasOwnProperty(event.key)){
        keyDownHandlers[event.key]()
    }
};

function updateGame(){
    updateSnakeHead();

    drawWorld();
    drawSnake();

    eatFood();
    drawFood();

    updateSnakeBody();
};
document.addEventListener("keydown",onKeyDown);
setInterval(updateGame,1000 / 13);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                                                               Snake on OOP

// задача малика
const fruits = ['apple', 'orange', 'yellow','apple','orange','orange','apple'];

const calculateFunc = (arr) => {
const res = {};
  arr.forEach((item) => {
      (res[item])? ++res[item] : res[item] = 1
  })
  return res;
}
console.log(calculateFunc(fruits))
// продолжаем в другой папке
