import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './charts.module.css';

export default class Charts extends Component {
	state = {
		data: {
			labels: [ 'Conta Corrente', 'Criptomoedas' ],
			datasets: [
				{
					data: [ this.props.valorContaCorrente, this.props.valorAplicado ],
					backgroundColor: [ '#ffc107', '#36A2EB' ],
					hoverBackgroundColor: [ '#ffc107', '#36A2EB' ]
				}
			]
		}
	};
	render() {
		return (
			<div className={styles.chart}>
				<h5>Meu Patrimônio</h5>
				<Doughnut data={this.state.data} />
			</div>
		);
	}
}
