import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Header } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'Header',
	component: Header,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Header> = () => {
	return <Header />;
};