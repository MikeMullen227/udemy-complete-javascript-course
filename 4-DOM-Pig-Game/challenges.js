/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, gamePlaying, whenSix, lastDice;

init();




//function btn() {
   //do something here
//}

//can create the function outside the event handler i.e. the btn function above and pass it into the addEventListener. Known as a callback function. 
//document.querySelector('.btn-roll').addEventListener('click', btn);
 
//Or the function can be created inside the event listener as an anonomus function 
//in this case anonymous function is the right solution because you only want this to happen for just this button.

document.querySelector('.btn-roll').addEventListener('click', function(){
	
	if(gamePlaying) {
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result.

		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';

		//var diceDOM = document.querySelector('.dice')
		//diceDOM.style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';	
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';	

		// 3. Update the round score If the rolled number was NOT a 1.
		

		if(dice1 !== 1 && dice2 !== 1) {
			// Add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			
			nextPlayer();
		}

		/*
		if(dice === 6 && lastDice === 6) {
			document.querySelector('#current-' + activePlayer).textContent = 0;
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();

		} else if(dice !== 1) {
			// Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			
			nextPlayer();
		}
		lastDice = dice;
		*/
	}	
	
	
});

document.querySelector('.btn-hold').addEventListener('click', function(){
		
		if(gamePlaying) {
				//add current score to global score
			scores[activePlayer] += roundScore;

			//update the UI
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

			var input = document.querySelector('.final-score').value;
			var winningScore;
			//undefined, null, 0, or "" are COERCED to false
			//anything else is coerced to true

			if(input) {
				winningScore = input;
			} else {
				winningScore = 100;
			}

			//check if player won the game 
			if(scores[activePlayer] >= winningScore) {
				document.querySelector('#name-' + activePlayer).textContent = "Winner!";
				document.getElementById('dice-1').style.display = 'none';
				document.getElementById('dice-2').style.display = 'none';

				document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
				document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
				gamePlaying = false;
			} else {
				//next player
				nextPlayer();
			}

		}

});


function nextPlayer() {

		// next player
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		
		//toggle is better than remove and add in this instance
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//document.querySelector('player-0-panel').classList.remove('active');
		//document.querySelector('player-1-panel').classList.add('active');

		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';

		// ternary operator
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		// if activePlayer equals player 0 then activePlayer becomes player 1, else activePlayer becomes player 0.
		roundScore = 0;

}


document.querySelector('.btn-new').addEventListener('click', init) 

function init() {

	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';


	//using getElementById because it can be used when IDs are selected and its faster than querySelector
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = "Player 2";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;