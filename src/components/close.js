import React from 'react';
import "./close.css"

export default class Close extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			temp: "HOT"
		}
	}
	render(){
		return (
			<div className="Close">
				{this.state.temp}
			</div>	 

			)
	}
}