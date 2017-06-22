import React from 'react';

export default class History extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			history: "Past guesses"
		}
	}
	render(){
		return (
			<div>
				<h3>{this.state.history}</h3>
			</div>	 

			)
	}
}