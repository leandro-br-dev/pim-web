import React from 'react';
import styles from './investimentos.module.css';
import Head from 'next/head';
import Header from '../../../components/home/header';
import Footer from '../../../components/home/footer';

export default class investimentos extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Quantum Finance - Investimentos</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Header />
				<section className={styles.sectionLogo}>
					<img src="../../img/logo-2.png" />
				</section>
				<main>
					<div className={styles.subtitle}>
						<h3> O que são criptomoedas? </h3>
					</div>
					<div className={styles.invcontent}>
						<div className={styles.content}>
							<p>
								A criptomoeda é um tipo de moeda virtual criada por programadores, que serve para
								realizar operações financeiras na internet. Assim como o dinheiro físico, a criptomoeda
								possui uma forma de evitar falsificações: um código único formado por letras e números,
								difícil de quebrar e que protege a moeda virtual. As criptomoedas são armazenadas em
								carteiras virtuais, e lá podem ser administradas, efetuando transações para qualquer
								lugar do mundo. Elas são geradas e "emitidas" em computadores, por meio da solução de
								problemas matemáticos.
							</p>
						</div>
						<div className={styles.content}>
							<p>
								Os computadores que resolvem esses problemas são chamados de minas, e seus
								administradores, são os mineradores de criptomoedas. Para investir, é necessário comprar
								criptomoedas com saldo em reais. Assim você inicia sua carteira virtual e poderá então
								investir com criptomoedas em fundos específicos. Vale ressaltar que grande parte das
								moedas virtuais utilizam sistemas de controle descentralizados, com base na tecnologia
								de blockchain. Conheça abaixo as principais criptomoedas desse mercado tão emergente,
								visível e latente em todo o mundo.
							</p>
						</div>
					</div>
					<div className={styles.imgfooter}>
						<img src="../../img/investimentos.jpg" />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}
