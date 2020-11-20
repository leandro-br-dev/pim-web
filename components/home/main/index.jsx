import React, { Component } from 'react';
import styles from './main.module.css';
import { Button } from '@material-ui/core/';
import BitcoinPrice from '../bitcoin-price';

export default class Main extends Component {
	state = {};
	render() {
		return (
			<main className={styles.main}>
				<div className={styles.container}>
					<section className={styles.sectionImg}>
						<img src="./img/traders.jpg" />
					</section>
					<section className={styles.sectionContent}>
						<div className={styles.sectionLogo}>
							<img src="./img/logo.png" />
						</div>
						<div className={styles.sectionDetail}>
							<h2>Venha transformar sua relação com o dinheiro.</h2>
							<p>
								Negociei na maior plataforma de criptomoedas, ativos digitais e outros investimentos
								alternativos do Brasil.
							</p>
							<Button className={styles.buttonCustom} variant="contained" href="home/cadastro">
								Abra sua conta grátis
							</Button>
							<img src="./img/criptomoeadas.png" />
						</div>
					</section>
				</div>
				<div className={styles.footerContainer}>
					<section className={styles.sectionInfo}>
						<h2>
							Um <b style={{ fontWeight: 'bold' }}>banco digital</b> completo
						</h2>
						<h2>na palma da sua mão</h2>

						<p>
							Com o app do banco digital Quantum Finance, você terá ao alcance
							<br />
							de um toque todas as funcionalidades da plataforma.
							<br />
							Investimentos, transferências e gestão de seus cripto ativos.
						</p>
						<br />
						<span>Baixe grátis o app banco digital Quantum Finance!</span>
						<br />
						<a href="#">
							<img src="./img/appstore.png" />
						</a>
						<a href="#">
							<img src="./img/googleplay.png" />
						</a>
					</section>

					<BitcoinPrice />
				</div>
			</main>
		);
	}
}
