import React, { Component } from 'react';
import styles from './footer.module.css';

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className={styles.footer}>
        <img src="/img/icon.png" />
      </footer>
    );
  }
}
