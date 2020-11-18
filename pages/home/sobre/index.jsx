import React, { Component } from 'react';
import styles from './sobre.module.css';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer';

export default class sobre extends React.Component {
	render() {
		return (
			<div>
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
