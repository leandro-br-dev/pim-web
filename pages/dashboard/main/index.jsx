import { Component } from 'react';
import styles from './main.module.css';

import Head from 'next/head';
import Header from '../../../components/dashboard/header';
import Sidebar from '../../../components/dashboard/sidebar';
import Title from '../../../components/dashboard/title';

export default class Register extends Component {
	state = {};
	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Quantum Finance - Seu banco digital de criptomoedas</title>
					<link rel="icon" href="/../../../favicon.ico" />
				</Head>

				<Header />
				<Sidebar />
				<Title />
			</div>
		);
	}
}
