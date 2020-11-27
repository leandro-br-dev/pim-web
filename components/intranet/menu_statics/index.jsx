import React, { Component } from 'react';
import Router from 'next/router';
import styles from './menu_statics.module.css';
import cn from 'classnames';
import { BarChart } from '@material-ui/icons';

export default class menu_statics extends Component {
	state = {
		clientes: 0,
		ativos: 0,
		receitas: 0,
		percAtivos: 0,
		percInadimplentes: 0,
		percBloqueados: 0,
		percCancelados: 0
	};

	async estatisticaCliente() {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/estatistica_clientes`);
		const json = await data.json();

		if (json != null) {
			let qtdClientes = 0;
			let percAtivos = 0;
			let percInadimplentes = 0;
			let percBloqueados = 0;
			let percCancelados = 0;

			json.forEach((element) => {
				if (element.id != 0) {
					qtdClientes += element.QTD;
				}

				if (element.id == 1) {
					percAtivos = element.QTD;
				}

				if (element.id == 0) {
					percInadimplentes = element.QTD;
				}

				if (element.id == 1) {
					percBloqueados = element.QTD;
				}

				if (element.id == 1) {
					percCancelados = element.QTD;
				}
			});

			this.setState({ percAtivos: (percAtivos / qtdClientes * 100).toFixed(0) });
			this.setState({ percInadimplentes: (percInadimplentes / qtdClientes * 100).toFixed(0) });
			this.setState({ percBloqueados: (percBloqueados / qtdClientes * 100).toFixed(0) });
			this.setState({ percCancelados: (percCancelados / qtdClientes * 100).toFixed(0) });

			this.setState({ ativos: percAtivos });
			this.setState({ clientes: qtdClientes });
		}
	}

	async estatisticaReceita() {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/receitas`);
		const json = await data.json();

		if (json != null) {
			let totalReceita = 0;
			json.forEach((element) => {
				if (element.confirma_efetivacao == true) {
					totalReceita += element.financeiro;
				}
			});

			this.setState({ receitas: (totalReceita / 1000).toFixed(0) });
		}
	}

	async componentDidMount() {
		this.estatisticaCliente();
		this.estatisticaReceita();
	}

	render() {
		return (
			<section>
				<div className={styles.containergraf}>
					<h4 className={styles.portintranet}>QUANTUM FINANCE - PORTAL INTRANET</h4>
					<div className={styles.estatisticas}>
						<div>
							<h6 className={styles.textograf}>
								Qtd. Clientes<BarChart
									className={cn(styles.icon, 'color-green')}
									color="green"
									fontSize="small"
								/>
							</h6>
							<br />
							<p className={styles.dadosgraf}>{this.state.clientes}</p>
						</div>
						<div>
							<h6 className={styles.textograf}>
								Ativos<BarChart
									className={cn(styles.icon, 'color-blue')}
									color="blue"
									fontSize="small"
								/>
							</h6>
							<br />
							<p className={styles.dadosgraf}>{this.state.ativos}</p>
						</div>
						<div>
							<h6 className={styles.textograf}>
								Receitas<BarChart
									className={cn(styles.icon, 'color-red')}
									color="red"
									fontSize="small"
								/>
							</h6>
							<br />
							<p className={styles.dadosgraf}>R$ {this.state.receitas} K</p>
						</div>
					</div>
				</div>

				<h5 className={styles.textogray}>Estatísticas</h5>
				<div className={styles.menu}>
					<div>
						<h3 className={styles.DivInternas}>Ativos</h3>
						<br />
						<p className={styles.paragrafo1}>{this.state.percAtivos}%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Inadimplentes</h3>
						<br />
						<p className={styles.paragrafo1}>{this.state.percInadimplentes}%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Bloqueados</h3>
						<br />
						<p className={styles.paragrafo1}>{this.state.percBloqueados}%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Cancelados</h3>
						<br />
						<p className={styles.paragrafo1}>{this.state.percCancelados}%</p>
					</div>
				</div>
			</section>
		);
	}
}
