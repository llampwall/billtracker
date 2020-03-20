import React, { Component } from 'react';
import Button from './Button';
import update from 'immutability-helper';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: black,
			names: ['Cindy', 'Billy', 'Jake']
		};
	}

	// add value to array
	// const newState = {
	// 	names: [...this.state.names, 'Jordan']
	// }

	// remove value from array
	// const newState = {
	// 	names: this.state.names.filter(name => name != 'Jordan')
	// }

	// merge two arrays
	// const newState = {
	// 	both: [...this.state.names, ...this.state.teachers]
	// }

	// sort array
	// const newState = {
	// 	names: this.state.names.slice().sort()
	// }


	// using immutability helper
	// update(this.state.names, {$push: ['Jordan']})
	//
	// const newState = update(this.state, {
	// 	background: {$set 'red'}
	// })
	//
	//
	//
	// this.setState(newState)


	render() {

		return (
			<div id="immutable">
        box
			</div>
		);
	}
}
