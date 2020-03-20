import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BillsApp from './components/BillsApp/BillsApp';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<BillsApp />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// printName = () => {
// 	console.log(this.state.name);
// };
// render() {
// 	return (
// 		<div
// 			className="container"
// 			style={{
// 				background: this.state.age < 25 ? 'red' : 'green',
// 				marginLeft: '30px'
// 			}}
// 		>
// 			<h1>{this.state.name}</h1>
// 			<div className="button" onMouseOver={this.printName}>
// 				click me
// 			</div>
// 		</div>
// 	);
// }
