import React, { Component } from 'react';
import './App.css';
import Wrap from './components/Wrap';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Wrap />
				<Footer />
			</React.Fragment>
		);
	}
}
export default App;
