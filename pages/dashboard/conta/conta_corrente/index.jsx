import { Component } from 'react';
import styles from './conta_corrente.module.css';
import { TextField } from '@material-ui/core/';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BankStatement from '../../../../components/dashboard/bank_statement';

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

export default class Conta_Correntepx extends Component {
	state = {
		valorDisponivel: '10.000,00',
		valorBloqueado: '500,00',
		valorLancamentos: '0,00',
		valorSaldo: '10.500,00',
		dataInicio: year + '-' + month + '-' + date,
		dataFinal: year + '-' + month + '-' + date
	};

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Quantum Finance - Seu banco digital de criptomoedas</title>
					<link rel="icon" href="/../../../favicon.ico" />
				</Head>

				<Header />
				<Sidebar />
				<Title />
				<main className={styles.main}>
					<div className={styles.content}>
						<div className={styles.dadosflex}>
							<div className={styles.boxdados}>
								<h6>Saldo Disponível</h6>
								<h5>{this.state.valorDisponivel}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Saldo Bloqueado</h6>
								<h5>{this.state.valorBloqueado}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Lançamentos Futuros</h6>
								<h5>{this.state.valorLancamentos}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Saldo Total</h6>
								<h5>{this.state.valorSaldo}</h5>
							</div>
						</div>

						<div className={styles.periodoBox}>
							<h6>Período</h6>
							<div className={styles.radioPeriodo}>
								<input className={styles.input} type="radio" id="Hoje" name="periodo" value="1" />
								<label for="Hoje">Hoje</label>

								<input className={styles.input} type="radio" id="7_dias" name="periodo" value="7" />
								<label for="7_dias">7 dias</label>

								<input className={styles.input} type="radio" id="15_dias" name="periodo" value="15" />
								<label for="15_dias">15 dias</label>

								<input className={styles.input} type="radio" id="30_dias" name="periodo" value="30" />
								<label for="30_dias">30 dias</label>

								<input className={styles.input} type="radio" id="60_dias" name="periodo" value="60" />
								<label for="60_dias">60 dias</label>

								<input className={styles.input} type="radio" id="90_dias" name="periodo" value="90" />
								<label for="90_dias">90 dias</label>
							</div>

							<div className={styles.dates}>
								<TextField
									type="date"
									name="dataRef"
									label="De"
									InputLabelProps={{
										shrink: true
									}}
									minLength="10"
									maxLength="10"
									required
									defaultValue={this.state.dataInicio}
								/>{' '}
								<TextField
									type="date"
									name="dataRef"
									label="Até"
									InputLabelProps={{
										shrink: true
									}}
									minLength="10"
									maxLength="10"
									required
									defaultValue={this.state.dataFinal}
								/>
							</div>
						</div>
					</div>

					<BankStatement />
				</main>
			</div>
		);
	}
}
