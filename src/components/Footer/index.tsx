import Image from 'next/image';
import * as S from './styles';

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import Logo from '../../../public/images/logo.svg';

export const Footer = () => {
	return (
		<S.Conteiner>
			<S.Colunm>
				<Image src={Logo} alt={Logo} width={188} height={65} />
				<h2>0800 800 800</h2>
				<p>comercial@agencia.com.br</p>
			</S.Colunm>
			<S.Colunm>
				<h3>MENU</h3>
				<p>Quem somos</p>
				<p>Cases</p>
			</S.Colunm>
			<S.Colunm>
				<h3>CONTEÚDO</h3>
				<p>E-books</p>
				<p>Fórmulas prontas</p>
			</S.Colunm>
			<S.Colunm>
				<h3>SOCIAL</h3>
				<S.ConteinerIcons>
					<BsInstagram />
					<FaFacebookF />
					<AiFillLinkedin />
					<AiFillYoutube />
				</S.ConteinerIcons>
			</S.Colunm>
			<S.CopyRith>&copy;2023 AGENCIA - Todos os direitos reservados.</S.CopyRith>
		</S.Conteiner>
	);
};