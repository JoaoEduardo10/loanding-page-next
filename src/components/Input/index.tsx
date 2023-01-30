/* eslint-disable no-useless-escape */
import * as S from './styles';

export type InputProps = {
    type: 'text' | 'email' | 'url'
    text: string
	pattern?: boolean
}

export const Input = ({ text, type, pattern= false }: InputProps) => {

	const handleType = (type: 'text' | 'email' | 'url', pattern: boolean) => {
		if(type === 'text' && pattern === true) {
			return '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$';
		}

		
	};

	return (
		<S.Conteiner 
			type={type}
			placeholder={text}
			pattern={handleType(type, pattern)}
			required
		/>
	);
};