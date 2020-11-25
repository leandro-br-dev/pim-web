import React, { Component } from 'react';
import styles from './sidebar.module.css';
import { Help, EventNoteSharp, AssignmentInd, List, Dashboard } from '@material-ui/icons';

export default class sidebar extends React.Component {
	state = {
		login: false
	};

	async componentDidMount() {
		this.setState({ login: localStorage.getItem('login') });
	}

	render() {
		if (this.state.login == false) {
			return (
				<div className={styles.sidebar}>
					<img src="/img/icon.png" alt="" />
				</div>
			);
		} else {
			return (
				<nav className={styles.sidebar}>
					<div className={styles.usuario}>
						<img src="/img/icon_profissional.png" />
						<div>
							<h6 className={styles.menubar1}>Consultor Financeiro</h6>
							<h6 className={styles.menubar2}>Jefferson Nunes</h6>
						</div>
					</div>

					<h6 className={styles.menuint1}>Menu</h6>
					<br />
					<ul>
						<li>
							<a href="http://localhost:3000/intranet/dashboard" className={styles.dash}>
								Dashboard <Dashboard className={styles.icon} fontSize="small" />
							</a>
							<br />
							<br />
						</li>
						<li>
							<h6 className={styles.menuint2}>Relatórios</h6>
							<br />
						</li>
						<li>
							<a href="https://cakeerp.com/wp-content/uploads/2017/04/11.06-Como-manter-um-relacionamento-duradouro-com-seu-cliente-01-1080x675.jpg">
								Clientes <AssignmentInd className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="https://lh3.googleusercontent.com/proxy/HHs8hxI14ejs9zBSWZFjZB_HeAxPZBY_uxvGZkqi8Hj9Vk9CnN7e3qXELSaLFLxtzj9rnhr_kaWZtlNBv6HUwwJa7wU4_MwZ1ofqmCxu1xaGlJAqqPwhRt5J6ojrAsU_ay7SWkxcIKkwWY_cYx9H880J5wc">
								Aniversariantes
								<EventNoteSharp className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="https://www.imovelweb.com.br/noticias/wp-content/uploads/2018/05/inadimplencia-no-mercado-imobiliario.jpg">
								Inadimplentes <List className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="https://s.glbimg.com/po/tt/f/original/2011/04/20/msn-bloqueado.jpg">
								Bloqueados <List className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="https://www.tre-sp.jus.br/imagens/fotos/cancelamento-de-titulos-eleitorais/@@images/4219d237-b8f3-41f1-8bb9-c3d884e43ecf.jpeg">
								Cancelados
								<Help className={styles.icon} fontSize="small" />
							</a>
						</li>
					</ul>
				</nav>
			);
		}
	}
}
