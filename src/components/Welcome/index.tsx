import { Button } from '../Button';
import * as S from './styles';

import Fundo from '../../../public/images/welcomeImage.svg';
import Image from 'next/image';

export const Welcome = () => {
	return (
		<S.Conteiner id='home'>
			<S.Title>
				<h1>Melhor agência de marketing do bairro</h1>
				<p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
				<Button title='Almentar vendas' kind='secondary' />
			</S.Title>
			<S.Image>
				<Image src={Fundo} alt='fundo' width={535} height={383}/>
			</S.Image>
		</S.Conteiner>
	);
};