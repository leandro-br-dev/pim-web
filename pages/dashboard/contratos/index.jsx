import { Component } from 'react';
import styles from './contratos.module.css';

import Head from 'next/head';
import Header from '../../../components/dashboard/header';
import Sidebar from '../../../components/dashboard/sidebar';
import Title from '../../../components/dashboard/title';
import Contracts from '../../../components/dashboard/contracts';

export default class Investimentos extends Component {
	state = {};

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Quantum Finance - Seu banco digital de criptomoedas</title>
					<link rel="icon" href="/../../../favicon.ico" />
				</Head>

				<Header />
				<Sidebar />
				<Title pasta="contrato" pagAtiva="investimentos" />
				<main className={styles.main}>
					<div className={styles.titulo}>
						<img src="/img/icon_etherium.png" alt="coin etherium" />
						<h5>Contratos Inteligentes</h5>
						<h6>Plataforma digital - Etherium</h6>
					</div>
					<div>
						<Contracts
							color="border-left-yellow"
							descricao="Aquisição de Imóvel residencial, Av Primeiro de Maio, 132 - Apto 14 - Aparecida - Santos/SP"
							valor="450000.00"
							data="15/03/2020"
							local_file="#"
						/>

						<Contracts
							color="border-left-yellow"
							descricao="Contrato de prestação de serviços junto ao escritório de advocacia MARQUES E FILHOS ASSOCIADOS"
							valor="30000.00"
							data="23/122019"
							local_file="#"
						/>

						<Contracts
							color="border-left-yellow"
							descricao="Aquisição de lote urbanizado, Rua Marginal S/N - Jardim Palmeiras - Itanhaém/SP"
							valor="50000.00"
							data="07/10/2019"
							local_file="#"
						/>
					</div>
				</main>
			</div>
		);
	}
}
