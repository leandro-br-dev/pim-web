import React from 'react';
import styles from './servicos.module.css';
import Head from 'next/head';
import Header from '../../../components/home/header';
import Title from '../../../components/home/title';
import Footer from '../../../components/home/footer';

export default class sobre extends React.Component {
	render() {
		return (
			<div>
				<Head>
					<title>Quantum Finance - Serviços</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Header />
				<Title />
				<main>
					<div className={styles.servicosbody}>
						<div className={styles.servicoscontent}>
							<div>
								<p className={styles.titulo}>CORRETAGEM DE CRIPTOMOEDA</p>
								<p className={styles.content}>
									As corretoras de valores são responsáveis por intermediar o envio de ordens de
									compra e venda de seus clientes via home broker e cobram um valor de corretagem por
									isso. A corretagem pode ser cobrada de forma fixa ou em percentual sobre o volume de
									cada operação, a taxa aplicada influi diretamente na rentabilidade líquida dos
									investimentos do trader.
								</p>
							</div>
							<section className={styles.imgfooter}>
								<img src="/img/criptomoeadas-4.png" />
							</section>
						</div>

						<div className={styles.servicoscontent}>
							<section className={styles.imgfooter}>
								<img src="/img/criptomoeadas-2.png" />
							</section>
							<div>
								<p className={styles.titulo}>COMPRA E VENDA DE CRIPTOMOEDA</p>
								<p className={styles.content}>
									Comprar e vender criptomoedas com o menor preço e alta liquidez é na QUANTUM
									FINANCE! Confira aqui o nossos portfólio completo, no qual oferecemos além de
									Bitcoin, Ethereum e a stable coin Tether (USDT), também diversas outras opções e
									moedas exclusivas no Brasil. São mais de 40 combinações de troca com real (BRL) e
									entre criptomoedas (cripto-cripto) que permitem a você negociar tanto na alta,
									quanto na baixa do mercado, além de aplicar diversas estratégias de negociação.
								</p>
							</div>
						</div>
						<div className={styles.servicoscontent}>
							<div>
								<p className={styles.titulo}>SMART CONTRACTS</p>
								<p className={styles.content}>
									O Smart Contract é encriptado e guardado na blockchain, sendo partilhado com os
									computadores que fazem parte da rede, que verificam a legitimidade do contrato.
									Embora partes do Smart Contract sejam públicas, a encriptação previne qualquer um de
									acessar os seus conteúdos, até um excelente hacker. Com Smart Contracts sendo
									executados na blockchain elimina-se a necessidade de intermediários para
									supervisionar e para tratar de transações, o que reduz fortemente os custos e os
									tempos de espera.
								</p>
							</div>
							<section className={styles.imgfooter}>
								<img src="/img/criptomoeadas.png" />
							</section>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}
