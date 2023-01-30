import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { CardsFatures, CardsFaturesProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockFeatures } from '../../utils/featuresAPI';

export default {
	title: 'CardsFatures',
	component: CardsFatures,
	args: mockFeatures,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof CardsFatures> = (agrs: CardsFaturesProps) => {
	return <CardsFatures {...agrs} />;
};