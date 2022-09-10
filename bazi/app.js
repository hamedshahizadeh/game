//variable
let userScore = 0;
let compScore = 0;

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const compScore_span = document.querySelector('#comp-score');
const userScore_span = document.querySelector("#user-score");
const result = document.querySelector('.result p')

// eventlistener
eventListener();
function eventListener() {
  rock_div.addEventListener("click", () => {
    game("r");
  });
  paper_div.addEventListener("click", () => {
    game("p");
  });
  scissor_div.addEventListener("click", () => {
    game("s");
  });
}

//function
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
      winrs(userChoice ,computerChoice)
      break;
    case "pr":
      winpr(userChoice ,computerChoice)
      break;
    case "sp":
      winsp(userChoice ,computerChoice)
      break;
    case "rp":
      loserp(userChoice ,computerChoice)
      break;
    case "ps":
      loseps(userChoice ,computerChoice)
      break;
    case "sr":
      losesr(userChoice ,computerChoice)
  break;
    default:
      draw(userChoice ,computerChoice)
  }
}
function convertToWord(letter){
  if (letter=='p') {
    return "Paper"
  } else if (letter=='r'){
    return 'Rock'
  }else{
  return 'Scissor'
  }
}
// win

function  winrs(userChoice ,computerChoice){

  if (result) {
    result.innerHTML=``
  }
  
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you win !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    userScore++;
  userScore_span.innerHTML = userScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
  </div>
<div class="choice red transform" id="s">
<img src="images/scissors.png" alt="" />
</div>
  <div class="choice green transform" id="r">
  <img src="images/rock.png" alt="" />

  `
  cho.appendChild(span)
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);
}

function winpr(userChoice ,computerChoice){
  
  if (result) {
    result.innerHTML=``
  }
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you win !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    userScore++;
  userScore_span.innerHTML = userScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
 
  <div class="choice red " id="r">
  <img src="images/rock.png" alt="" />
</div>
<div class="choice green" id="p">
<img src="images/paper.png" alt="" />
</div>
  `
  cho.appendChild(span)
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);
}

function  winsp(userChoice ,computerChoice){
  
  if (result) {
    result.innerHTML=``
  }
  
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you win !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    userScore++;
  userScore_span.innerHTML = userScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
  <div class="choice red transform" id="p">
<img src="images/paper.png" alt="" />
</div>
 
  <div class="choice green" id="s">
  <img src="images/scissors.png" alt="" />
</div>

  `
  cho.appendChild(span)
  
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);
}
// lose
function  loserp(userChoice ,computerChoice){
  if (result) {
    result.innerHTML=``
  }
  
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you lost !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    compScore++;
    compScore_span.innerHTML = compScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
  <div class="choice green transform" id="p">
  <img src="images/paper.png" alt="" />
  </div>
  <div class="choice red transform" id="r">
  <img src="images/rock.png" alt="" />
</div>


  `
  cho.appendChild(span)
  console.log(cho_div);
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);



}
function loseps(userChoice ,computerChoice){
  if (result) {
    result.innerHTML=``
  }
  
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you lost !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    compScore++;
    compScore_span.innerHTML = compScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
  <div class="choice green transform" id="s">
  <img src="images/scissors.png" alt="" />
</div>
<div class="choice red" id="p">
<img src="images/paper.png" alt="" />
</div>
  `
  cho.appendChild(span)
  console.log(cho_div);
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);

}
function losesr(userChoice ,computerChoice){
  if (result) {
    result.innerHTML=``
  }
  
  const spinner = document.querySelector('#spin')
  spinner.style.display =" inherit"
  setTimeout(() => {
    spinner.style.display =" none"
    result.innerHTML= `!!! you lost !!
    you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
      computerChoice
    )}   `;
    compScore++;
    compScore_span.innerHTML = compScore;
  const cho = document.querySelector('.choices')
  const cho_div = document.querySelector('.choices div')
  const span = document.createElement('span')
  cho_div.style.display = 'none'
  span.innerHTML= `
  <div class="choice green" id="r">
  <img src="images/rock.png" alt="" />
</div>
< <div class="choice red" id="s">
<img src="images/scissors.png" alt="" />
</div>
  `
  cho.appendChild(span)
  console.log(cho_div);
    setTimeout(() => {
      span.remove()
      result.innerHTML=``
      cho_div.style.display='block'
     
    }, 3000);
  }, 750);

}
// draw
function  draw(userChoice ,computerChoice){
  if (userChoice+computerChoice == 'ss') {

    if (result) {
      result.innerHTML=``
    }
    
    const spinner = document.querySelector('#spin')
    spinner.style.display =" inherit"
    setTimeout(() => {
      spinner.style.display =" none"
      result.innerHTML= `!!! The game equalised !!
      you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
        computerChoice
      )}   `;
    const cho = document.querySelector('.choices')
    const cho_div = document.querySelector('.choices div')
    const span = document.createElement('span')
    cho_div.style.display = 'none'
    span.innerHTML= `
  <div class="choice gray transform" id="s">
  <img src="images/scissors.png" alt="" />
  </div>
  <div class="choice gray" id="s">
  <img src="images/scissors.png" alt="" />
  </div>
  
    `
    cho.appendChild(span)
      setTimeout(() => {
        span.remove()
        result.innerHTML=``
        cho_div.style.display='block'
       
      }, 3000);
    }, 750);

  } else if(userChoice+computerChoice == 'rr') {
  
    if (result) {
      result.innerHTML=``
    }
    
    const spinner = document.querySelector('#spin')
    spinner.style.display =" inherit"
    setTimeout(() => {
      spinner.style.display =" none"
      result.innerHTML= `!!! The game equalised !!
      you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
        computerChoice
      )}   `;
    const cho = document.querySelector('.choices')
    const cho_div = document.querySelector('.choices div')
    const span = document.createElement('span')
    cho_div.style.display = 'none'
    span.innerHTML= `
    <div class="choice gray" id="r">
    <img src="images/rock.png" alt="" />
  </div>
  <div class="choice gray transform" id="r">
  <img src="images/rock.png" alt="" />
</div>
  
    `
    cho.appendChild(span)
      setTimeout(() => {
        span.remove()
        result.innerHTML=``
        cho_div.style.display='block'
       
      }, 3000);
    }, 750);
  }else{

    
    if (result) {
      result.innerHTML=``
    }
    
    const spinner = document.querySelector('#spin')
    spinner.style.display =" inherit"
    setTimeout(() => {
      spinner.style.display =" none"
      result.innerHTML= `!!! The game equalised !!
      you ${convertToWord(userChoice)} and computer chose the ${convertToWord(
        computerChoice
      )}   `;
    const cho = document.querySelector('.choices')
    const cho_div = document.querySelector('.choices div')
    const span = document.createElement('span')
    cho_div.style.display = 'none'
    span.innerHTML= `
    <div class="choice gray transform" id="p">
    <img src="images/paper.png" alt="" />
  </div>
  <div class="choice gray " id="p">
  <img src="images/paper.png" alt="" />
</div>
  
    `
    cho.appendChild(span)
      setTimeout(() => {
        span.remove()
        result.innerHTML=``
        cho_div.style.display='block'
       
      }, 3000);
    }, 750);
  }
}