import React, { Component } from 'react';
import styles from './bitcoin-price.module.css';

export default class BitcoinPrice extends Component {
  state = {};
  render() {
    return (
      <div className={styles.BitcoinPrice}>
        <label htmlFor="">Preço da Unidade Bitcoin</label>
        <h2 style={{ color: 'var(--yellow)', fontSize: '4.0rem' }}>
          <small>R$</small> 37.082,<small>00</small>
        </h2>

        <h6>
          <b>51,61</b> bitcoins negociados nas últimas 24 horas
        </h6>
        <br />
        <h6>
          <b>R$50,00</b> compram <b>0,001 Bitcoins</b>
        </h6>

        <div className={styles.focus}>
          <span>Taxa zero de depósitos</span>
          <br />
          <span>Mais de um milhão de clientes</span>
        </div>
      </div>
    );
  }
}
