import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Button, ButtonProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'Button',
	component: Button,
	args: {
		title: 'Button'
	} as ButtonProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const BacgroundPrimary: ComponentStory<typeof Button> = (agrs: ButtonProps) => {
	return <Button {...agrs} kind='premary' />;
};

export const Bacgroundsecondary: ComponentStory<typeof Button> = (agrs: ButtonProps) => {
	return <Button {...agrs} kind='secondary' />;
};