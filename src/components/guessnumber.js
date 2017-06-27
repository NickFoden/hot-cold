import React from 'react';
import'./guessnumber.css'

//Number of guesses thus far

export default function GuessNumber(props) {
	return (
		<div className="GuessNumber">
			<p className="guessP"> Guess # {props.guessnumber}</p>
		</div>	 

	)
}
