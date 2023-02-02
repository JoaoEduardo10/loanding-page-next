import * as S from './styles';

import { IoMdClose } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';

import Logo from '../../../public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../Button';
import { useState } from 'react';

export const Header = () => {
	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(e => !e);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<S.Conteiner>

			<S.LogoTipo>
				<Image src={Logo} width="100" height="100" alt={Logo} />
			</S.LogoTipo>
			
			<S.Menu>
				<ul>
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#features">Recursos</Link>
					</li>
					<li>
						<Link href="#contact">Contato</Link>
					</li>
				</ul>
			</S.Menu>

			<S.MenuMobile open={open}>
				<ul>
					<li onClick={handleClose}>
						<Link href="#home">Home</Link>
					</li>
					<li onClick={handleClose}>
						<Link href="#features">Recursos</Link>
					</li>
					<li onClick={handleClose}>
						<Link href="#contact">Contato</Link>
					</li>
					<li onClick={handleClose}>
						<Button title='Fale conosco' kind='premary' />
					</li>
				</ul>
			</S.MenuMobile>

			<S.Icon onClick={handleOpenMenu}>
				{
					open ? <IoMdClose /> : <TiThMenu className='icon2' />
				}
			</S.Icon>

			<S.Action>
				<Button title='Fale conosco' kind='premary' />
			</S.Action>
		</S.Conteiner>
	);
};