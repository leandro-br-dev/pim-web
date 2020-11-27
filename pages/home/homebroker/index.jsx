import React from 'react';
import styles from './homebroker.module.css';
import Head from 'next/head';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer';

export default class homebroker extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Quantum Finance - Homebroker</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Header />
				<section className={styles.sectionLogo}>
					<img src="../../img/logo-2.png" />
				</section>
				<main>
					<div className={styles.divgif}>
						<img src="../../img/carregando.gif" />
						<p>Estamos te direcionando para o Homebroker Quantum Finance</p>
						<p>Por favor aguarde ...</p>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}
