import * as S from './styles';

import Logo from '../../../public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';

export const Header = () => {
	return (
		<S.Conteiner>
			<S.LogoTipo>
				<Image src={Logo} width="100" height="100" alt={Logo} />
			</S.LogoTipo>
			<S.Menu>
				<ul>
					<li>
						<Link href="">Home</Link>
					</li>
					<li>
						<Link href="">O que</Link>
					</li>
					<li>
						<Link href="">Cases</Link>
					</li>
				</ul>
			</S.Menu>
			<S.Action>
				<Button title='Fale conosco' kind='premary' />
			</S.Action>
		</S.Conteiner>
	);
};