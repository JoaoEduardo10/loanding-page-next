import * as S from './styles';

export type ButtonProps = {
    title: string;
	kind: 'premary' | 'secondary'
}

export const Button = ({ title, kind }: ButtonProps) => {
	return (
		<S.Conteiner kind={kind}>{title}</S.Conteiner>
	);
};