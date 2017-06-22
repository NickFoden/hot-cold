import React from 'react';
import "./takeguess.css"

//Guess Input

export default function TakeGuess (props){
		return (
			<div className="TakeGuess">
				<form name="GuessForm">
					<input type="text"placeholder="enter a number"></input>
					<button type="submit">Guess</button>
				</form>
			</div>	 

			)
	}