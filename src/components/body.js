import React from 'react';
import GuessNumber from './guessnumber';
import Guess from'./guess';
import History from './history';
import TakeGuess from './takeguess';
import Close from './close';
import './body.css';


export default function Body (props) {
	return (
		<div className="Container">
			<Close temp={props.temp}/>
			<div className="Guts">
				<TakeGuess onGuess={props.onGuess}/>
				<Guess guess={props.guess} />
				<GuessNumber guessnumber={props.guessnumber} />
			</div>	
			<History history={props.history} />
		</div>	 

	)
}

	