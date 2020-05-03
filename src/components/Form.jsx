import React, { Component } from 'react';
import '../styles/core-components/_form.scss';
import '../styles/core-components/_buttons.scss';

class Form extends Component {
	state = {};
	render() {
		return (
			<form className="form" id="currencyForm">
				<div className="form__fieldset">
					<div className="form__item">
						<label htmlFor="selectCurrency" className="form__label">
							FROM
						</label>
						<select id="currency" name="currency" className="form__select">
							<option value="0">Select </option>
							<option value="usd">USD</option>
							<option value="eur">EUR</option>
						</select>
					</div>
					<div className="form__item">
						<label htmlFor="amount" className="form__label">
							AMOUNT
						</label>
						<input type="text" id="amount" name="amount" placeholder="Amount" className="form__input" />
					</div>
					<div className="form__item">
						<label htmlFor="selectCurrency" className="form__label">
							TO
						</label>
						<select id="currency2" name="currency" className="form__select">
							<option value="0">Select </option>
							<option value="usd">USD</option>
							<option value="eur">EUR</option>
						</select>
					</div>
				</div>
				<input type="submit" className="btn btn__form btn__form--submit" form="currencyForm" />
			</form>
		);
	}
}

export default Form;
