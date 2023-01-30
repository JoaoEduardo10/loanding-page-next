/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import * as S from './styles';

export type CardsFaturesProps = {
    icon: any;
    heading: string;
    text: string;
}

export const CardsFatures = ({ heading, icon, text }: CardsFaturesProps) => {
	return (
		<S.Features>
			<Image src={icon} alt={icon} width={85} height={85} />
			<h1>{heading}</h1>
			<p>{text}</p>
		</S.Features>
	);
};