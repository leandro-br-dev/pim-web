import React, { Component } from 'react';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { Help, EventNoteSharp, AssignmentInd, List, Dashboard } from '@material-ui/icons';

class LinkSidebar extends Component {
	render() {
		if (this.props.icon == 'AssignmentInd') {
			return (
				<li>
					<Link href={`/intranet/relatorios?consulta=${this.props.href}`}>
						<a>
							{this.props.titulo}
							<AssignmentInd className={styles.icon} fontSize="small" />
						</a>
					</Link>
				</li>
			);
		}

		if (this.props.icon == 'EventNoteSharp') {
			return (
				<li>
					<Link href={`/intranet/relatorios?consulta=${this.props.href}`}>
						<a>
							{this.props.titulo}
							<EventNoteSharp className={styles.icon} fontSize="small" />
						</a>
					</Link>
				</li>
			);
		}

		if (this.props.icon == 'List') {
			return (
				<li>
					<Link href={`/intranet/relatorios?consulta=${this.props.href}`}>
						<a>
							{this.props.titulo}
							<List className={styles.icon} fontSize="small" />
						</a>
					</Link>
				</li>
			);
		}
	}
}

export default class sidebar extends React.Component {
	state = {
		ln: '',
		perfil: ''
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

						<LinkSidebar href="clientes" titulo="Clientes" icon="AssignmentInd" />
						<LinkSidebar href="aniversariantes" titulo="Aniversariantes" icon="EventNoteSharp" />
						<LinkSidebar href="inadimplentes" titulo="Inadimplentes" icon="List" />
						<LinkSidebar href="bloqueados" titulo="Bloqueados" icon="List" />
						<LinkSidebar href="cancelados" titulo="Cancelados" icon="List" />
					</ul>
				</div>
			</nav>
		);
	}
}
