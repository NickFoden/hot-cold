import React from 'react';
import "./close.css"

//Current Guess

export default function Close (props) {
	return (
		<div className="Close" id={props.temp}>
			{props.temp}
		</div>	 

	)
}