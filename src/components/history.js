import React from 'react';
import './history.css';

//List of past guesses - to be an array

export default class History extends React.Component {
	render(){
		const history = this.props.history.map((number, index) => (
			<li key={index}>{number}</li>)); 

		return (
			<div className="History">
				<ul className="list">
					{history}
				</ul>	
			</div>	 

		)
	}
}
