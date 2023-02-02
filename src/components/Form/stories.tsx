import { Meta, ComponentStory, } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Form, FormProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

const [loading, setLonding] = useState(false);

export default {
	title: 'Form',
	component: Form,
	args: {
		loading,
		setLonding
	} as unknown as FormProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Form> = (agrs: FormProps) => {
	return <div style={{ margin: '0 auto' }}><Form {...agrs} /></div>;
};