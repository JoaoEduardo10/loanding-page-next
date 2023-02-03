/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SMTPClient } from 'emailjs';
import { MessgerBodyProps } from '../../components/Form';



export default async function handler(req: any, res: any) {

	const messageBody = req.body as MessgerBodyProps;

	const emailJessica = (email: string) => {
		if(email === 'Jessicalouriana2@gmail.com') {
			return `Oie princesa, bom se recebeu esse email unico feito exclusivamente para voçê uma deusa, quer dizer que minha logica encaixou kkkk. De antemão pesso que pedoe os erros de português kkkk, vida que segue.\n\n#FATOS SOBRE VOÇÊ;\n
- És linda maravilhosa
- Uma bela Profesora
- É poeta
- Fala multiplas linguas "português, espanhou, latin. Em termos gerais a palavra é: "voçê é foda..."
- Já falei linda? bem por precaução assim falo:
  "Tão linda que parece uma boneca...",
  "mas linda que o por do sol em uma praia em plena sexta-feira",
  "Não sei se voçê sabe, mas dizem que a coisa mais linda do universo é a Supernova de Tycho, mas falam isso porque não viram voçê..."
- Alem de ser uma mulher autamente centrada e focadas nos objetivos da vida "Isso me facina cara"\n
Bom, se for fala sobre todos as suas qualidades vou passa uns dois dias escrevendo. Da uma vontade de te trazer para casa e por numa prateleira para eu poder lhe admirar, isso faz me lembra de uma frase da "Cecília Meireles", uma professora minha fez eu fazer um trabalho sobre ela por ter ensinuado que a poesia brasileira é brega kkkk me lasquei, a frase é assim:

"Basta-me um pequeno gesto,
 feito de longe e de leve,
 para que venhas comigo,
 e eu para sempre te leve…"

Não sou um fan de poesia brasileira mas sei que voçê gosta então RECEEEBA.... KKKK. Caso esteja recebendo esse email na data esperada, voçê ainda esta dodoi então melhoras princesa, quando voçê melhorar caso deseje vou na sua casa lhe visitar "se eu estiver a que também kkk".\n
Desejo a voçê toda sorte do mundo, que Deus te inlumente e voçê receba felicidade em abundancia, pois voçê merece isso e muito mais.\n
Afirmo, Email feito unicamente para você "Jessica", nenhuma outra pessoa vai receber esse email.\n
		assinado: Musilon / João Eduardo kkkk....

	`;
			
		}

		return `Iai ${messageBody.name}, voçê recebeu esse email teste, de min,  jhon kkkk, Seu numero cadastrado foi: ${messageBody.number}, \n site: ${messageBody.url}\n\n. Não se precupe isso vai direto para voçê, não fica salvo...`;
	};

	const subEmail = (email: string) => {
		if(email === 'Jessicalouriana2@gmail.com') {
			return `Um email para a dama dificil`;
		}

		return `Email test`;
	};
	
	const client = new SMTPClient({
		user: process.env.EMAIL,
		password: process.env.SENHA,
		host: 'smtp.gmail.com',
		ssl: true,
	});

	try {
		const messege = await client.sendAsync({
			text: emailJessica(messageBody.email),
			from: 'joaoeduardoj55@gmail.com',
			to: messageBody.email,
			subject: subEmail(messageBody.email),
		});

		console.log(messege);
	} catch (err) {
		console.error(err);
	}


	res.status(200).json({ menseger: 'Envido' });
}