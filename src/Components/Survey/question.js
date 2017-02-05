import React, {Component} from 'react';

export const Question = (props) => {
	return(
		<div>
			{props.question}
			<input type="text" placeholder="answer here" />
		</div>
		)
}



