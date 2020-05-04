import React, { Component } from 'react';
import EuroImage from '../images/EuroImage.jpeg';
import Form from './Form';
import CurrencyList from './CurrencyList';
import '../styles/core-components/_wrap.scss';

class Wrap extends Component {
	constructor() {
		super();
		this.state = {
			width: window.innerWidth
		};
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}
	render() {
		const { width } = this.state;
		const isNotMobile = width > 800;

		//renders CurencyList only if the screen size is wider than 800{
		return (
			<div className="wrap">
				<div className="wrap__image">
					<img src={EuroImage} className="wrap__img" alt="Map of Italy with a flag" />
					<span className="wrap__span">Lorem et Ipsum</span>
					{isNotMobile ? <CurrencyList /> : null}
				</div>
				<div className="wrap__article">
					<h1 className="wrap__heading">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
					</h1>
					<p className="wrap__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta inventore ad delectus dignissimos
						excepturi quidem sapiente magnam modi tenetur laudantium saepe maiores aliquid quaerat ipsa
						officia quas est, dolorum labore.
					</p>
				</div>

				<Form />
			</div>
		);
	}
}

export default Wrap;
