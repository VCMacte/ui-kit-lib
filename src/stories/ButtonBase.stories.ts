import type { Meta } from '@storybook/react'

import ButtonBase from '../ButtonBase/ButtonBase'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'ButtonBase',
	component: ButtonBase,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ButtonBase>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const isActive: Story = {
	args: {
		isActive: true,
		text: 'Button',
	},
}
export const isDark: Story = {
	args: {
		isDark: true,
		text: 'Button',
	},
}
export const isLight: Story = {
	args: {
		isLight: true,
		text: 'Button',
	},
}
export const withBorder: Story = {
	args: {
		withBorder: true,
		text: 'Button',
	},
}
