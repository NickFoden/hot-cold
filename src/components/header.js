import React from 'react';
import './header.css';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: "Hot or Cold App"
		}
	}
	render(){
		return (
			<div className="Header">
				<h1>{this.state.title}</h1>
			</div>	 

			)
	}
}