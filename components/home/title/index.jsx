import React, { Component } from 'react';
import styles from './title.module.css';

export default class Title extends Component {
	state = {};
	render() {
		return (
			<section className={styles.sectionLogo}>
				<a href="/">
					<img src="../../img/logo-2.png" />
				</a>
			</section>
		);
	}
}
