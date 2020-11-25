import React, { Component } from 'react';
import styles from './list_clients.module.css';
import { Help, FilterList } from '@material-ui/icons';
import { Button } from '@material-ui/core/';

export default class list_clients extends Component {
	state = {};
	render() {
		return (
			<div>
				<table className={styles.geral}>
					<tr>
						<td>Clientes</td>
						<td />
						<td>
							<div className={styles.button}>
								<Button variant="contained" href="/intranet/cadastro">
									<FilterList className={styles.icon} color="white" fontSize="small" />Filtro
								</Button>
							</div>
						</td>
					</tr>
					<tr>
						<th>#</th>
						<th>CPF/CNPJ</th>
						<th>CLIENTE</th>
					</tr>

					<tr>
						<td>1</td>
						<td>345.701.098-61</td>
						<td>LEANDRO DE SOUZA</td>
					</tr>
					<tr>
						<td>2</td>
						<td>283.177.667-78</td>
						<td>LEONARDO LEMOS NOGUEIRA</td>
					</tr>
					<tr>
						<td>3</td>
						<td>322.874.292-17</td>
						<td>CHRISTIANO BEZERRA PERES</td>
					</tr>
					<tr>
						<td>4</td>
						<td>299.898.244-78</td>
						<td>ANTÔNIO JOSÉ SANTOS DE MELO</td>
					</tr>
					<tr>
						<td>5</td>
						<td>312.290.338-26</td>
						<td>ROBERTA FERNANDES SCHMIDT</td>
					</tr>
					<tr>
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<td />
						<td />
						<td />
					</tr>
				</table>
			</div>
		);
	}
}
