import React from 'react';
import styles from './header.module.css';
import classNames from 'classnames';
import { Help } from '@material-ui/icons';
import { Button } from '@material-ui/core/';

export default class header extends React.Component {
	render() {
		return (
			<header className={styles.header}>
				<nav className={styles.navLeft}>
					<ul>
						<li className={styles.link}>
							<a href="/home/sobre">
								<h6>Sobre</h6>
							</a>
						</li>
						<li className={styles.link}>
							<a href="/home/investimentos">
								<h6>Investimentos</h6>
							</a>
						</li>
						<li className={styles.link}>
							<a href="/home/servicos">
								<h6>Serviços</h6>
							</a>
						</li>
						<li className={styles.link}>
							<a href="/home/planos">
								<h6>Planos e Promoções</h6>
							</a>
						</li>
						<li className={classNames(styles.homeBroker, styles.esquerda)}>
							<a href="/home/homebroker">
								<h6>Home Broker</h6>
							</a>
						</li>
					</ul>
				</nav>

				<nav className={styles.navRight}>
					<ul>
						<li className={classNames(styles.link)}>
							<Help color="disabled" fontSize="small" />
						</li>
						<li className={styles.link}>
							<a href="/home/atendimento">
								<small>Atendimento</small>
							</a>
						</li>
						<li className={styles.link}>
							<a>
								<small>|</small>
							</a>
						</li>
						<li className={styles.link}>
							<a href="/home/login">
								<small>Login</small>
							</a>
						</li>

						<Button className={styles.buttonCustom} variant="contained" href="/home/cadastro">
							Abra sua conta
						</Button>
					</ul>
				</nav>
			</header>
		);
	}
}
