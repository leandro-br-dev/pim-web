import React from 'react';
import styles from './header.module.css';

export default class header extends React.Component {
	state = {
		strNome: '',
		strPrimeiraLetra: '',
		strUltimaLetra: '',
		strId: ''
	};

	componentDidMount() {
		const primeiraLetra = localStorage.getItem('nome').split(' ')[0].substring(0, 1);
		const ultimaLetra = localStorage
			.getItem('nome')
			.split(' ')
			[localStorage.getItem('nome').split(' ').length - 1].substring(0, 1);
		const nome = localStorage.getItem('nome');
		const id = localStorage.getItem('id');

		this.setState({ strNome: nome });
		this.setState({ strPrimeiraLetra: primeiraLetra });
		this.setState({ strUltimaLetra: ultimaLetra });
		this.setState({ strId: id });
	}

	render() {
		return (
			<header className={styles.header}>
				<nav className={styles.navLeft}>
					<img src="../../img/icon.png" />
					<h5>Quantum Finance</h5>
				</nav>

				<nav className={styles.navRight}>
					<div className={styles.circle}>
						<h6 className={styles.iniciais}>
							{this.state.strPrimeiraLetra}
							{this.state.strUltimaLetra}
						</h6>
					</div>
					<div>
						<h6 className={styles.nome}>{this.state.strNome}</h6>

						<div className={styles.row}>
							<h6 className={styles.labelCodigo}>Código do Cliente: </h6>
							<h6 className={styles.codigo}>{this.state.strId}</h6>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
