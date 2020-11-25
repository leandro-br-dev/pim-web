import React, { Component } from 'react';
import styles from './menu_statics.module.css';
import cn from 'classnames';
import { Search, OpenWith, PowerSettingsNew, BarChart } from '@material-ui/icons';

export default class menu_statics extends Component {
	state = {};
	render() {
		return (
			<header>
				<nav className={styles.cabecalho}>
					<a href="https://static.efetividade.net/img/xtra/Spotlight-t4we.png">
						<Search className={styles.icon} color="gray" fontSize="small" /> Localizar Clientes
					</a>

					<ul>
						<li>
							<a href="https://image.flaticon.com/icons/png/512/94/94519.png">
								<OpenWith className={styles.icon} color="gray" fontSize="small" />
							</a>
						</li>
						<li>
							<a href="https://www.ibramacelastic.com.br/octopus/design/images/146/products/b/botao_liga_desliga_1.jpg">
								<PowerSettingsNew className={styles.icon} color="gray" fontSize="small" />
							</a>
						</li>
					</ul>
				</nav>
				<div className={styles.containergraf}>
					<div className={styles.portintranet}>QUANTUM FINANCE - PORTAL INTRANET</div>
					<div className={styles.estatisticas}>
						<div>
							<h3 className={styles.textograf}>
								Qtd. Clientes<BarChart
									className={cn(styles.icon, 'color-green')}
									color="green"
									fontSize="small"
								/>
							</h3>
							<br />
							<p className={styles.dadosgraf}>120</p>
						</div>
						<div>
							<h3 className={styles.textograf}>
								Ativos<BarChart
									className={cn(styles.icon, 'color-blue')}
									color="blue"
									fontSize="small"
								/>
							</h3>
							<br />
							<p className={styles.dadosgraf}>87</p>
						</div>
						<div>
							<h3 className={styles.textograf}>
								Receitas<BarChart
									className={cn(styles.icon, 'color-red')}
									color="red"
									fontSize="small"
								/>
							</h3>
							<br />
							<p className={styles.dadosgraf}>R$ 15.6K</p>
						</div>
					</div>
				</div>
				<div className={styles.textogray}>Estatísticas</div>
				<div className={styles.menu}>
					<div>
						<h3 className={styles.DivInternas}>Ativos</h3>
						<br />
						<p className={styles.paragrafo1}>32%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Inadimplentes</h3>
						<br />
						<p className={styles.paragrafo1}>42%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Bloqueados</h3>
						<br />
						<p className={styles.paragrafo1}>52%</p>
					</div>
					<div>
						<h3 className={styles.DivInternas}>Cancelados</h3>
						<br />
						<p className={styles.paragrafo1}>62%</p>
					</div>
				</div>
			</header>
		);
	}
}
