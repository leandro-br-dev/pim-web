import styles from './header.module.css';

export default class header extends React.Component {
	render() {
		return (
			<header className={styles.header}>
				<nav className={styles.navLeft}>
					<img src="../../img/icon.png" />
					<h5>Quantum Finance</h5>
				</nav>

				<nav className={styles.navRight}>
					<div className={styles.circle}>
						<h6 className={styles.iniciais}>LS</h6>
					</div>
					<div>
						<h6 className={styles.nome}>Leandro de Souza</h6>

						<div className={styles.row}>
							<h6 className={styles.labelCodigo}>Código do Cliente: </h6>
							<h6 className={styles.codigo}>1</h6>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}
