import React, { Component } from 'react';
import styles from './idletable.module.css';
import Head from 'next/head';
import Sidebar from '../../../components/intranet/sidebar';
import MenuStatics from '../../../components/intranet/menu_statics';
import ListClients from '../../../components/intranet/list_clients';
import PanelCriptocoins from '../../../components/intranet/panel_criptocoins';

export default class Idletable extends Component {
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
								<tr className={styles.tabelageralclient}>
									<th>CLIENTE</th>
									<th>CFP/CNPJ</th>
									<th>DATA DE NASC.</th>
									<th>CLIENTE</th>
									<th>CFP/CNPJ</th>
									<th>DATA DE NASC.</th>
									<th>CLIENTE</th>
									<th>CFP/CNPJ</th>
									<th>DATA DE NASC.</th>
								</tr>
								<tr>
									<td>1</td>
									<td>2</td>
									<td>3</td>
									<td>4</td>
									<td>5</td>
									<td>6</td>
									<td>7</td>
									<td>8</td>
									<td>9</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
