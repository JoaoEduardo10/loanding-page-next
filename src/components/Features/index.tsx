import { ReactNode, useState } from 'react';
import { mockFeatures } from '../../utils/featuresAPI';
import { CardsFatures } from '../CardsFatures';
import * as S from './styles';

export type FeaturesProps = {
    children: ReactNode
}

export const Features = () => {
	const [cards] = useState(mockFeatures);


	return (
		<S.Conteiner>
			<h1>Neste bairro, não há agência melhor. Garantimos.</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda deleniti, voluptas voluptatum veniam obcaecati, rferendis.</p>
			<S.ConteinerFatures>
				{
					cards.map((card) => (
						<CardsFatures key={card.heading} heading={card.heading} icon={card.icon} text={card.text} />
					))
				}
			</S.ConteinerFatures>
		</S.Conteiner>
	);
};