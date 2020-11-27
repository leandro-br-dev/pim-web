import React, { Component } from 'react';
import styles from './login.module.css';

import FormLogin from '../../../components/home/form-login';

import Head from 'next/head';
import Header from '../../../components/home/header';
import Title from '../../../components/home/title';
import Footer from '../../../components/home/footer';

export default class Register extends Component {
	state = {};
	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Quantum Finance - Acesse agora</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>

				<Header />
				<Title />

				<FormLogin />
				<Footer />
			</div>
		);
	}
}
