import React, { Component } from 'react';
import styles from './title.module.css';

export default class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.pasta == 'conta') {
			return (
				<section className={styles.sectionTitle}>
					<h5>Minha Conta</h5>
					<div>
						<a href="/dashboard/conta/visao_geral">
							<h6 className={this.props.pagAtiva == 'visao_geral' ? 'color-blue' : ''}>Visão Geral</h6>
						</a>
						<a href="/dashboard/conta/conta_corrente">
							<h6 className={this.props.pagAtiva == 'conta_corrente' ? 'color-blue' : ''}>
								Conta Corrente
							</h6>
						</a>
						<a href="/dashboard/conta/investimentos">
							<h6 className={this.props.pagAtiva == 'investimentos' ? 'color-blue' : ''}>
								Meus Investimentos
							</h6>
						</a>
					</div>
				</section>
			);
		} else {
			return (
				<section className={styles.sectionTitle}>
					<h5>Contratos</h5>
					<div>
						<a href="/dashboard/contratos">
							<h6 className={'color-blue'}>Contratos Inteligentes</h6>
						</a>
					</div>
				</section>
			);
		}
	}
}
