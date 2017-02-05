import React from 'react';
import {Question}  from './question';




export const Survey = (props) => {

	return (
		<div>
			{props.questions.map( (currQuestion, index) => {
				return(	<Question question={currQuestion} key={index} /> )

			})}

		</div>
	)
} 