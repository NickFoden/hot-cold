import React from 'react';
import GuessNumber from './guessnumber';
import History from './history';
import TakeGuess from './takeguess';
import Close from './close';
import './body.css';


export default function Body (props) {
	return (
		<div className="Container">
			<Close />
			<div className="Guts">
				<TakeGuess onGuess={props.onGuess}/>
				<GuessNumber guessnumber={props.guessnumber} />
			</div>	
			<History history={props.history} />
		</div>	 

	)
}

	