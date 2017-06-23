import React from 'react';
import Guess from './guess';
import GuessNumber from './guessnumber';
import History from './history';
import TakeGuess from './takeguess';
import Close from './close';
import './body.css';


export default class Body extends React.Component {

	render(){
		return (
			<div className="Container">
				<Close />
				<div className="Guts">
					<TakeGuess />
					<Guess />
					<GuessNumber />
				</div>	
				<History history={this.props.history}/>
			</div>	 

		)
	}
}