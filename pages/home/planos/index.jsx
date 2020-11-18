import React, { Component } from 'react';
import styles from './planos.module.css';
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
					<div className={styles.planomain}>
						<div>
							<div className={styles.plano1} />
							<div className={styles.plano2} />
							<div className={styles.plano1} />
						</div>
						<div>
							<div>
								<img src="../../img/sobre.jpg" />
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}
