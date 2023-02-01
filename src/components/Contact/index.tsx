import { Form } from '../Form';
import * as S from './styles';

export const Contact = () => {
	return (
		<S.Conteiner>
			<S.Info>
				<span>ENTRE EM CONTATO</span>
				<h2>Aumente seu resultado de vendas e performance</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
			</S.Info>
			<S.DivConteiner>
				<Form />
				<S.Pragrafo>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <span>Política de Privacidade</span>.</S.Pragrafo>
			</S.DivConteiner>
		</S.Conteiner>
	);
};