import React from 'react';
import styles from './sidebar.module.css';

export default class sidebar extends React.Component {
	render() {
		return (
			<sidebar className={styles.sidebar}>
				<div>
					<ul>
						<li>
							<a href="">
								<img src="../../img/carteira.png" />
								<h6>Minha Conta</h6>
							</a>
						</li>
						<li>
							<a href="">
								<img src="../../img/contract.png" />
								<h6>Contratos Inteligentes</h6>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<a href="">
								<img src="../../img/margin.png" />
								<h6>Home Broker</h6>
							</a>
						</li>
					</ul>
				</div>
			</sidebar>
		);
	}
}
