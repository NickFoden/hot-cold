import React from 'react';
import './header.css';

//Title of page - add start over button soon

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Hot or Cold App"
		}
	}
	new(e){
		e.preventDefault();
		this.props.new();
	}
	render(){
		return (
			<div className="Header">
				<h1>{this.state.title}</h1>
				<button id="new" type="submit" onClick={e => this.new(e)}>New Game</button>
			</div>	 

		)
	}
}