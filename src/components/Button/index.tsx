import * as S from './styles';

export type ButtonProps = {
    title: string;
	kind: 'premary' | 'secondary'
	disabled?: boolean
}

export const Button = ({ title, kind, disabled = false }: ButtonProps) => {
	return (
		<S.Conteiner disabled={disabled} kind={kind}>{title}</S.Conteiner>
	);
};