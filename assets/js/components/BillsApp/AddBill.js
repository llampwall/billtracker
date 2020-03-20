import React, { Component } from 'react';

export default class AddBill extends Component {
	constructor() {
		super();
		this.state = {
			company_name: '',
			price: 0,
			paid: false,
			img: '/img/BillsApp/default.png'
		};
	}

	clearForm = () => {
		this.setState({
			company_name: '',
			price: 0
		});
	};

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState(
			{
				[name]: value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.save(this.state);
		this.clearForm();
	};

	render() {
		return (
			<section
				id="AddBill"
				className={`${this.props.open == true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add a Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="company">Business Name</label>
							<input
								type="text"
								id="company"
								name="company_name"
								onChange={this.inputChange}
								value={this.state.company_name}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Cost</label>
							<input
								type="text"
								id="price"
								name="price"
								onChange={this.inputChange}
								value={this.state.price}
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}
