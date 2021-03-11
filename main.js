const grid= document.querySelector('.grid');
const startButton= document.getElementById('#start');
const score= document.getElementById('score');
const squares=[];
let currentSnake=[2,1,0];
let direction =1;
function createGrid(){
  // create 100 of these elements with a for loop
    for(let i=0; i<400;i++){
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
  //remove last element fron current snake array
  const tail= currentSnake.pop()
  //remove stylig from last element
  squares[tail].classList.remove('snake');
  //add sqare in directon we are heading
  currentSnake.unshift(currentSnake[0]+ direction)
  //add style in new square
  squares[currentSnake[0]].classList.add('snake');
}
move();
