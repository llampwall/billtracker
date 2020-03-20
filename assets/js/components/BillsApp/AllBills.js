import React, { Component } from 'react';

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	sumBills = () => {
		const bills = this.props.bills;
		if (bills.length == 0) {
			return 0;
		}
		let prices = bills.map(bill => bill.price);
		let sum = prices.reduce((total, price) => {
			return parseFloat(parseFloat(total) + parseFloat(price));
		});
		return parseFloat(sum).toFixed(2);
	};

	showAllBills = () => {
		const bills = this.props.bills;
		if (bills.length > 0) {
			return bills.map((bill, index) => {
				return (
					<li className={`bill ${bill.paid ? 'paid' : ''}`} key={index}>
						<div className="company">
							<div className="logo">
								<img src={bill.img} />
							</div>
							<div className="title">{bill.company_name}</div>
						</div>
						<div className="price">${bill.price}</div>
						<div className="buttons">
							<div
								className="paid"
								onClick={this.props.changeBillStatus.bind(null, index)}
							>
								<i className="fa fa-check"></i>
							</div>
							<div
								className="delete"
								onClick={this.props.deleteBill.bind(null, index)}
							>
								<i className="fa fa-trash"></i>
							</div>
						</div>
					</li>
				);
			});
		} else {
			return (
				<li className="bill">
					<div className="no-bills">You have no bills! Lucky You...</div>
				</li>
			);
		}
	};

	render() {
		return (
			<section id="AllBills">
				<div className="container">
					<div className="total">
						<div className="text">Total Balance:</div>
						<div className="number">${this.sumBills()}</div>
					</div>

					<ul className="bills-list">{this.showAllBills()}</ul>
				</div>
			</section>
		);
	}
}
