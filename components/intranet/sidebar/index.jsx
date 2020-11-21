import React, { Component } from 'react';
import styles from './sidebar.module.css';

export default class sidebar extends React.Component {
	render() {
		return (
			<div className={styles.sidebar}>
				<h1>Hello World</h1>
			</div>
		);
	}
}
