import React, { Component } from 'react';

export default class Button extends Component {
	constructor() {
		super();
		this.state = {
			hover: false
		};
	}

	toggleHover = () => {
		this.setState({ hover: !this.state.hover });
	};

	render() {
		const styleButton = {
			width: '50%',
			border: '3px solid black',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '700',
			textAlign: 'center',
			cursor: 'pointer',
			transition: 'all .3s ease-in-out',
			background: this.state.hover ? this.props.hoverColor : 'white'
		};

		return (
			<div
				className={`button ${this.props.action}`}
				style={styleButton}
				onMouseEnter={this.toggleHover}
				onMouseLeave={this.toggleHover}
				onClick={this.props.click}
			>
				{this.props.children}
			</div>
		);
	}
}
