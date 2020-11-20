import React from 'react';
import styles from './planos.module.css';
import Header from '../../../components/home/header';
import Title from '../../../components/home/title';
import Footer from '../../../components/home/footer';

export default class sobre extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Title />
				<main>
					<div className={styles.content}>
						<div>
							<div>
								<p className={styles.titulocontent}>PLANOS QUANTUM FINANCE </p>
							</div>
							<div className={styles.plano1}>
								O melhor investimento com estratégias personalizadas de investimento para todos os
								cenários do preço de criptomoedas, oferecendo flexibilidade, diversificação e proteção
								para sua carteira de investimentos. Atendimento direcionado, sendo que a nossa principal
								preocupação é garantir o melhor atendimento do mercado. Analisamos o seu perfil antes de
								realizar o investimento, garantindo que você contrate as melhores opções. Não cobramos
								nenhuma taxa de corretagem em criptomoedas nos primeiros seis meses do usuário
								cadastrado como cliente ativo.
							</div>
						</div>
					</div>
					<section className={styles.imgfooter}>
						<img src="/img/criptomoeadas-3.png" />
					</section>
				</main>

				<Footer />
			</div>
		);
	}
}
