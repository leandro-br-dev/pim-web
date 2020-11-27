import React from 'react';
import styles from './sobre.module.css';
import Head from 'next/head';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer';

export default class sobre extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Quantum Finance - Sobre nós</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Header />

				<main>
					<section className={styles.sectionLogo}>
						<img src="../../img/logo-2.png" />
					</section>
					<div className={styles.maincontent}>
						<div>
							<h2>CORRETAGEM DE CRIPTOMOEDAS</h2>
							<p />
						</div>
						<div>
							<img src="../../img/sobre.jpg" />
						</div>
						<div>
							<h2>COMPRA E VENDA DE CRIPTOMOEDAS</h2>
							<p />
						</div>
						<div>
							<img src="../../img/sobre.jpg" />
						</div>
						<div>
							<h2>SMART CONTRACTS</h2>
							<p />
						</div>
						<div>
							<img src="../../img/sobre.jpg" />
						</div>
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}
