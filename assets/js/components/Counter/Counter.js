import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			num: 0,
			mode: 'manual'
		};
	}

	clickedPlus = () => {
		this.setState(
			{
				num: this.state.num + 1
			},
			() => {
				console.log(this.state);
			}
		);
	};

	clickedMinus = () => {
		this.setState(
			{
				num: this.state.num - 1
			},
			() => {
				console.log(this.state);
			}
		);
	};

	runCounter = () => {
		console.log('running...');
		setInterval(() => {
			this.setState({
				num: this.state.num + 1
			});
		}, 1000);
	};

	componentDidMount() {
		if (this.props.mode == 'auto') {
			this.setState(
				{
					mode: this.props.mode
				},
				() => {
					this.runCounter();
				}
			);
		}
	}

	render() {
		const styleButtons = {
			display: this.state.mode == 'auto' ? 'none' : 'flex'
		};

		return (
			<div id="counter" style={styleCounter}>
				<div className="number" style={styleNumber}>
					{this.state.num}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button action="minus" hoverColor="red" click={this.clickedMinus}>
						-
					</Button>
					<Button action="plus" hoverColor="green" click={this.clickedPlus}>
						+
					</Button>
				</div>
			</div>
		);
	}
}

const styleCounter = {
	maxWidth: '400px',
	width: '100%',
	margin: '0 auto'
};

const styleNumber = {
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '700',
	textAlign: 'center'
};

const styleButton = {
	width: '50%',
	border: '3px solid black',
	padding: '20px',
	fontSize: '2rem',
	fontWeight: '700',
	textAlign: 'center',
	cursor: 'pointer'
};
