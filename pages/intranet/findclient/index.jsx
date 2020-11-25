import React, { Component } from 'react';
import styles from './findclient.module.css';
import Sidebar from '../../../components/intranet/sidebar';
import MenuStatics from '../../../components/intranet/menu_statics';
import ListClients from '../../../components/intranet/list_clients';
import PanelCriptocoins from '../../../components/intranet/panel_criptocoins';

export default class Findclient extends Component {
	state = {};
	render() {
		return (
			<main className={styles.mainbg}>
				<div className={styles.container}>
					<Sidebar />
					<div className={styles.main}>
						<MenuStatics />
						<div className={styles.docker}>
							<table className={styles.geral}>
								<h2>Dados Pessoais</h2>
								<tr className={styles.tabeladadosclient}>
									<th>CLIENTE</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>CFP/CNPJ</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>DATA DE NASC.</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>TELEFONE</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>EMAIL</th>
									<td>XXX</td>
								</tr>
							</table>
							<table className={styles.geral}>
								<h2>Situação Cliente</h2>
								<tr className={styles.tabeladadosclient}>
									<th>SITUAÇÃO</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>RENTABILIDADE</th>
									<td>XXX</td>
								</tr>
								<tr className={styles.tabeladadosclient}>
									<th>EM ATRASO</th>
									<td>XXX</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
