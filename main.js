const grid= document.querySelector('.grid');
const startButton= document.getElementById('start');
const scoreDisplay = document.getElementById('score');
let squares=[];
let currentSnake=[2,1,0];
let direction =1;
let width = 10
let appleIndex= 0
let score = 0
let intervalTime= 1000
let speed = 0.9

function createGrid(){
  // create 100 of these elements with a for loop
    for(let i=0; i<width*width;i++){
      // crate element
    const square=document.createElement('div')
      // add stying to these element
      square.classList.add('square')
      // put the element into our gird
      grid.appendChild(square);
      // push it into a new square array
      squares.push(square)
    }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move(){

  if(
     (currentSnake[0] + width >= width * width && direction ===width ) ||//if snake has hit botton
    (currentSnake[0] % width ===width -1 && direction === 1) ||//if snake  has hit right wall
      (currentSnake[0] % width === 0 && direction === -1) ||//if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has  hit top wall
    squares[currentSnake[0] + direction].classList.contains('snake') //if snake move to opposite
   )

return clearInterval(timerId)

  //remove last element fron current snake arraysq
  const tail= currentSnake.pop()
  //remove stylig from last element
  squares[tail].classList.remove('snake');
  //add sqare in directon we are heading
  currentSnake.unshift(currentSnake[0]+ direction)

//deal with snake head getting the apple
if(squares[currentSnake[0]].classList.contains('apple')){
  //remove the class of apple
  squares[currentSnake[0]].classList.remove('apple')
  //grow our snake by adding class of snake
  squares[tail].classList.add('snake')
  console.log(tail)
  //grow snake array
  currentSnake.push(tail)
  console.log(currentSnake)
  //generate a new appleIndex
  generateApples()
  //add one to the Score
  score++
  //display
  scoreDisplay.textContent=score
  //speed up our snake
  clearInterval(timerId)
  intervalTime = intervalTime * speed
  timerId = setInterval(move,intervalTime)
}


  //add style in new square
  squares[currentSnake[0]].classList.add('snake');
}
move();

//const timerId= setInterval(function,time)

let timerId=setInterval(move,intervalTime)
function generateApples(){
  do{
    //genetare a random number
  appleIndex = Math.floor(Math.random()*squares.length)
  console.log(appleIndex)
  }while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}

generateApples()



//keycode
// 39 is right arrow
// 38 is the up arrow
// 37 is the left arrow
// 40 is for the down arrow


function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38) {
        console.log('up pressed')
        direction = -width
    } else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40) {
        console.log('down pressed')
        direction = +width
    }
}
document.addEventListener('keyup', control)
// document.addEventListener('eventype',function)
