import React from 'react';


class Bomb extends React.Component {
	constructor(props){
		super(props)
		this.state = {
	    	secondsLeft: this.props.initialCount
	    }
	}




	render(){
		let message; 

		if (this.state.secondsLeft <= 0) {
			message = "Boom!"
		} else {
			message  = `${this.state.secondsLeft} seconds left before I go boom!`
		}


		return (
		<div>
			<p>{message}</p>
		</div>
	)}
}

export default Bomb