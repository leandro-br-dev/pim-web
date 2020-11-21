import React from 'react';
import styles from './sidebar.module.css';

export default class sidebar extends React.Component {
	render() {
		return (
			<nav className={styles.sidebar}>
				<div>
					<ul>
						<li>
							<a href="/dashboard/conta/visao_geral">
								<img src="../../img/carteira.png" />
								<h6>Minha Conta</h6>
							</a>
						</li>
						<li>
							<a href="/dashboard/contratos">
								<img src="../../img/contract.png" />
								<h6>Contratos Inteligentes</h6>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a href="/home/homebroker">
								<img src="../../img/margin.png" />
								<h6>Home Broker</h6>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
