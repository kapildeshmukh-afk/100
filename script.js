'use strict'
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0EL=document.querySelector('#score--0');
const score1EL=document.querySelector('#score--1');
const diceEL=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const scores=[0,0];
let current0Score= document.getElementById('current--0');
let current1Score= document.getElementById('current--1');

//switching player
const switchPlayer= function(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
            activePlayer=activePlayer==0?1:0;
            currentScore=0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
}
// to hide the dice at starting
diceEL.classList.add('hidden');
// ................................
//setting initial scores and assigning a variable to work on them
score0EL.textContent=0;
score1EL.textContent=0;
//........................................

let currentScore=0;
let activePlayer=0;
let playing=true;

 //rolling dice
btnRoll.addEventListener('click', function(){
    if(playing){
      const diceChange = Math.trunc(Math.random()*6) +1;
    
      //...................................................................
  
      //showing dice
      diceEL.classList.remove('hidden')
       diceEL.src = `dice-${diceChange}.png`;
      //checking if dice rolled =1
      if(diceChange!==1){
        currentScore+=diceChange;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
       
      }else{
            //  switching the next player
            switchPlayer();
      }
    }
})
btnHold.addEventListener('click',function(){
  if(playing){
 //add current score to active player
 scores[activePlayer]+=currentScore;
 document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
 //check if players score is >=100
 
if (scores[activePlayer]>=20){
  //finish the game
  playing=false;
 console.log(scores[activePlayer]);
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
}else{
 //switch to the next player
 switchPlayer();
}
  }
})
btnNew.addEventListener('click',function(){
  // resetting the score to zero
  score0EL.textContent=0;
  score1EL.textContent=0;
  current0Score.textContent=0;
  current1Score.textContent=0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  diceEL.classList.add('hidden')
})