import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Input, InputProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'Input',
	component: Input,
	args: {
		text: 'Algo',
		type:  'text'
	} as InputProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const TamplateText: ComponentStory<typeof Input> = (agrs: InputProps) => {
	return <Input {...agrs} type='text' text='A quer é o input de texto' />;
};

export const TamplateUrl: ComponentStory<typeof Input> = (agrs: InputProps) => {
	return <Input {...agrs} type='url' text='A quer é o input de Url' />;
};

export const TamplateEmail: ComponentStory<typeof Input> = (agrs: InputProps) => {
	return <Input {...agrs} type='email' text='A quer é o input de email' />;
};