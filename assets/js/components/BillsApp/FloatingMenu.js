import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<nav id="FloatingMenu">
				<div className="link">
					<div className="icon">
						<i className="fa fa-credit-card"></i>
					</div>
					<div className="text">spend</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fa fa-save"></i>
					</div>
					<div className="text">save</div>
				</div>

				<div className="link" onClick={this.props.click}>
					<div className="icon plus">
						<i className="fa fa-plus-circle"></i>
					</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fa fa-exchange"></i>
					</div>
					<div className="text">transfer</div>
				</div>

				<div className="link">
					<div className="icon">
						<i className="fa fa-cogs"></i>
					</div>
					<div className="text">settings</div>
				</div>
			</nav>
		);
	}
}
