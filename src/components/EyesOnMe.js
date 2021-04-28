// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
	render () {
		const focusing = () => {
			console.log('Good!')
		}

		const blur = () => {
			console.log('Hey! Eyes on me!')
		}
	return (
		<div>
			<button onFocus={focusing} onBlur={blur}></button>
		</div>
	)
	}
	
}

export default EyesOnMe

