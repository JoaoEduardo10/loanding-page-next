/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SMTPClient } from 'emailjs';
import { MessgerBodyProps } from '../../components/Form';



export default async function handler(req: any, res: any) {

	const messageBody = req.body as MessgerBodyProps;
	
	const client = new SMTPClient({
		user: process.env.EMAIL,
		password: process.env.SENHA,
		host: 'smtp.gmail.com',
		ssl: true,
	});

	try {
		await client.sendAsync({
			text: `Iai ${messageBody.name}, voçê recebeu esse email teste, de min,  jhon kkkk, Seu numero cadastrado foi: ${messageBody.number}, \n site: ${messageBody.url}\n\n. Não se precupe isso vai direto para voçê, não fica salvo...`,
			from: 'joaoeduardoj55@gmail.com',
			to: messageBody.email,
			subject: 'Email teste',
		});
	} catch (err) {
		console.error(err);
	}


	res.status(200).json({ menseger: 'Envido' });
}