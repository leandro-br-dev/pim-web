import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './charts.module.css';

const data = {
	labels: [ 'Conta Corrente', 'Criptomoedas' ],
	datasets: [
		{
			data: [ 300, 250 ],
			backgroundColor: [ '#ffc107', '#36A2EB' ],
			hoverBackgroundColor: [ '#ffc107', '#36A2EB' ]
		}
	]
};

export default class Charts extends Component {
	state = {};
	render() {
		return (
			<div className={styles.chart}>
				<h5>Meu Patrimônio</h5>
				<Doughnut data={data} />
			</div>
		);
	}
}
