import { FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';

export const Form = () => {

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		return;
	};


	return (
		<S.Conteiner onSubmit={handleSubmit}>
			<h2>Fale com um especialista</h2>
			<Input 
				text='Nome completo'
				type='text'
			/>
			<Input 
				text='E-mail profissional'
				type='email'
			/>
			<Input 
				text='Celular/Whatsapp'
				type='text'
				pattern={true}
			/>
			<Input 
				text='Site'
				type='url'
			/>

			<Button title='Enviar' kind='premary' />
		</S.Conteiner>
	);
};