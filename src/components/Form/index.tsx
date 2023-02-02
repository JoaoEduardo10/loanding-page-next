import { useState } from 'react';
import { FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import * as S from './styles';

export type MessgerBodyProps = {
	name: string
	email: string
	number: string
	url: string
}

export const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [url, setUrl] = useState('');


	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const messageBody: MessgerBodyProps = {
			email,
			name,
			number,
			url
		};

		await fetch('/api/sendEmil', {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'content-type': 'application/json'
			},
			body: JSON.stringify(messageBody)
		});

		alert('Email enviado com sucesso');

		setEmail('');
		setName('');
		setNumber('');
		setUrl('');
	};

	return (
		<S.Conteiner onSubmit={handleSubmit}>
			<h2>Fale com um especialista</h2>
			<Input 
				text='Nome completo'
				type='text'
				onText={setName}
				value={name}
			/>
			<Input 
				text='E-mail profissional'
				type='email'
				onText={setEmail}
				value={email}
			/>
			<Input 
				text='Celular/Whatsapp'
				type='text'
				pattern={true}
				onText={setNumber}
				value={number}
			/>
			<Input 
				text='Site'
				type='url'
				onText={setUrl}
				value={url}
			/>

			<Button title='Enviar' kind='premary' />
		</S.Conteiner>
	);
};