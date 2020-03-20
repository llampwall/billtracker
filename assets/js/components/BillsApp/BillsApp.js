import React, { Component } from 'react';
import update from 'immutability-helper';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './Addbill';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			AllBills: [
				{
					company_name: 'Netflix',
					price: 12.99,
					paid: false,
					img: '/img/BillsApp/netflix.png'
				},
				{
					company_name: 'Amazon',
					price: 7.99,
					paid: true,
					img: '/img/BillsApp/amazon.png'
				},
				{
					company_name: 'Uber',
					price: 64.14,
					paid: false,
					img: '/img/BillsApp/uber.png'
				}
			]
		};
	}

	// open add bill page
	clickedAdd = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
		document.getElementById('company').focus();
	};

	// add a new bill to the list
	saveBill = bill => {
		const newBills = update(this.state.AllBills, {
			$push: [bill]
		});
		this.setState(
			{
				AllBills: newBills,
				addBillOpen: !this.state.addBillOpen
			},
			() => {
				console.log(this.state);
			}
		);
	};

	// delete a bill
	deleteBill = billIndex => {
		const newState = update(this.state, {
			AllBills: {
				$splice: [[billIndex, 1]]
			}
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	// change bill paid or unpaid
	changeBillStatus = billIndex => {
		const newState = update(this.state, {
			AllBills: {
				[billIndex]: {
					$toggle: ['paid']
				}
			}
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills
					bills={this.state.AllBills}
					changeBillStatus={this.changeBillStatus}
					deleteBill={this.deleteBill}
				/>
				<AddBill open={this.state.addBillOpen} save={this.saveBill} />
				<div className="content-bg"></div>
				<FloatingMenu click={this.clickedAdd} />
			</div>
		);
	}
}
