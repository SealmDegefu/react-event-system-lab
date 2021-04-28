// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
	render () {

		const keyUp = () => {
			console.log('Entering password...')
		}
	return (
		<div>
			<input type="password" onKeyUp={keyUp}></input>
		</div>
	)
	}
	
}

export default Keypad