import React, { Component } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/core-components/_currency-list.scss';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const api = `https://currencyapi.net/api/v1/rates?key=${API_KEY}`;

class CurrencyList extends Component {
	state = {
		rates: []
	};

	getData() {
		Axios.get(api).then((result) => {
			let arr = [];
			arr = Object.entries(result.data.rates).map(([ key, value ]) => [ key, value ]).splice(47, 15); //returns only 20 rates starting from EUR
			console.log(arr);
			this.setState({ rates: arr });
		});
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div className="currency-timeline">
				<div className="currency-list">
					<div className="currency-list__body">
						{this.state.rates.map(([ key, value ], index) => (
							<div className="currency-list__item" key={index}>
								<p className="currency-list__currency">{key}</p>
								<span className="currency-list__content">{value}</span>
							</div>
						))}
					</div>
					<div className="currency-list__btn">
						<span className="currency-list__continue">See all rates</span>
						<FontAwesomeIcon icon={faChevronCircleRight} className="currency-list__svg" />
					</div>
				</div>
			</div>
		);
	}
}
export default CurrencyList;
