import React, { Component } from 'react';
import styles from './sidebar.module.css';
import { Help, EventNoteSharp, AssignmentInd, List, Dashboard } from '@material-ui/icons';

export default class sidebar extends React.Component {
	state = {
		login: '',
		perfil: '',
		nome: ''
	};

	async componentDidMount() {
		this.setState({ login: localStorage.getItem('login') });
		this.setState({ perfil: localStorage.getItem('perfil') });
		this.setState({ nome: localStorage.getItem('nome') });
	}

	render() {
		return (
			<nav className={styles.sidebar}>
				<div className={this.state.login != 'true' ? styles.invisible : ''}>
					<div className={styles.usuario}>
						<img src="/img/icon_profissional.png" />
						<div>
							<h6 className={styles.menubar}>{this.state.perfil}</h6>
							<h6 className={styles.menubar}>{this.state.nome}</h6>
						</div>
					</div>

					<h6 className={styles.menuint1}>Menu</h6>
					<br />
					<ul>
						<li>
							<a href="/intranet/dashboard" className={styles.dash}>
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
							<a href="/intranet/relatorios">
								Clientes
								<AssignmentInd className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="/intranet/relatorios">
								Aniversariantes
								<EventNoteSharp className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="/intranet/relatorios">
								Inadimplentes <List className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="/intranet/relatorios">
								Bloqueados <List className={styles.icon} fontSize="small" />
							</a>
						</li>
						<li>
							<a href="/intranet/relatorios">
								Cancelados
								<Help className={styles.icon} fontSize="small" />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
