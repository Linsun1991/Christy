//Grabbing Elements
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("close");
const strtGmeBtn = document.getElementById("gameBtnModal1");
const exitGmeBtn = document.getElementById("gameBtnModal2");
const playGmeBtn = document.getElementById("plyBtnModal");
const retrnGmeBtn = document.getElementById("gameBtnModal3");

const modal = document.getElementById("modal");
const Lvl1 = document.getElementById("modalLevel1");
const score = document.getElementById("points")

const nodeList = document.querySelectorAll("#dog-names1>option");
const nodeList1 = document.querySelectorAll("#dog-names2>option");
const nodelist2 = document.querySelectorAll("#dog-names3>option");
const nodeList3 = document.querySelectorAll("#dog-names4>option");
const nodeList4 = document.querySelectorAll("#dog-names5>option");
const nodeList5 = document.querySelectorAll("#dog-names6>option");

const myChoiceEl = document.getElementById("dog-names1");
const computerChoiceEl = document.getElementById("dog-names2");

//Functions
const openModal = () => {
  modal.style.display = "block";
  modalSame.style.display = "none";
  modalWinner.style.display = "none";
  modalLooser.style.display = "none";
  modalIntro.style.display = "block";
  modalLevel1.style.display = "none";
  modalLevel1.style.display = "none";
  modalLevel1.style.display = "none";
  gameBtnModal1.style.display = "block";
  gameBtnModal2.style.display = "none";
  gameBtnModal3.style.display = "none";
  score.style.display="none";
};

const closeModal = () => {
  modal.style.display = "none";
  modalSame.style.display = "none";
  pointIncre=0;
  score.innerText = `Score = ${pointIncre}`;
};

function levelOpen() {
  modalIntro.style.display = "none";
  modalLevel1.style.display = "block";
  gameBtnModal1.style.display = "none";
  gameBtnModal2.style.display = "block";
  score.style.display="block";
  pointIncre=0;
  score.innerText = `Score = ${pointIncre}`;
}

const nodes = Array.from(nodeList);
const dogList = nodes.map((x) => {
  return x.innerText;
});


function dogSelection() {
  const computerChoice1 = dogList[Math.floor(Math.random() * dogList.length)];
  computerChoiceEl.value = computerChoice1;
  
}

const retrn = () => {
  modalLevel1.style.display = "block";
  modalSame.style.display = "none";
  gameBtnModal3.style.display = "none";
};

let pointIncre = 0;
const score1=()=>{ 
  pointIncre+=10;
  score.innerText = `Score = ${pointIncre}`
}

function playGame() {
  const myChoice = myChoiceEl.value;
  const computerChoice1 = computerChoiceEl.value;

  console.log(`my = ${myChoice} comp = ${computerChoice1}`)

  if (myChoiceEl.value === computerChoice1) {
    modalSame.style.display = "block";
    modalLevel1.style.display = "none";
    gameBtnModal3.style.display = "block";
  } else if (
    myChoice === "Dobberman" &&
    computerChoice1 === "German-shepperd"
  ) {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else if (myChoice === "Shih-tzu" && computerChoice1 === "Dobberman") {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else if (myChoice === "Shih-tzu" && computerChoice1 === "German-shepperd") {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else if (myChoice === "Shih-tzu" && computerChoice1 === "Stray") {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else if (myChoice === "Stray" && computerChoice1 === "Dobberman") {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else if (myChoice === "Stray" && computerChoice1 === "German-shepperd") {
    modalLevel1.style.display = "none";
    modalLooser.style.display = "block";
  } else {
    modalLevel1.style.display = "none";
    modalWinner.style.display = "block";
     score1();
  }
}


//Event Listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
strtGmeBtn.addEventListener("click", levelOpen);
retrnGmeBtn.addEventListener("click", retrn)
exitGmeBtn.addEventListener("click", closeModal);
playGmeBtn.addEventListener("click", playGame);
myChoiceEl.addEventListener("change", dogSelection);


