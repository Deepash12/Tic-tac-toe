// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turnO = true;
// let count=0;
// const winpattern = [
//     [0, 1, 2],[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
// ];
// const resetgame=()=>{
//     turnO=true;
//     count=0;
//     enableboxes();
//     msgContainer.classlist.add("hide");
// };
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO) {
//             box.innertext = "O";
//             turnO = false;
//         }
//         else {
//             box.innertext = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         let iswinner=checkwinner();
//         if (count === 9 && !isWinner) {
//             gameDraw();
//           }

//     });
// });
// const gameDraw = () => {
//     msg.innerText = `Game was a Draw.`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   };
// const disableboxes=()=>{
//     for(let box of boxes){
//         box.disabled=true;

//     }

// };
// const enableboxes=()=>{
//     for(let box of boxes){
//         box.disabled=false;
//         box.innertext="";
//     }
// };
// const showwinner =(winner)=>{
//     msg.innertext='Congratulations,Winner is ${winner}';
//     msgcontainer.classlist.remove("hide");
//     disable.boxes();
// }



// const checkwinner=()=>{
//     for(let pattern of winpattern){
//         let pos1val=boxes[pattern[0]].innertext;
//         let pos2val=boxes[pattern[1]].innertext;
//         let pos3val=boxes[pattern[2]].innertext;
//         if(pos1val!=""&& pos2val!=""&&pos3val!=""){
//             if(pos1val===pos2val&&pos2val===pos3val){
//                 showwinner(pos1val);
//                 return true;
//             }
//         }
//     }
// };
// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);









let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
