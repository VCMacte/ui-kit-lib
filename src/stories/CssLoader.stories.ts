import type { Meta } from '@storybook/react'

import CssLoader from '../CssLoader/CssLoader'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'CssLoader',
	component: CssLoader,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CssLoader>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const isLoading: Story = {
	args: {
		isLoading: true,
	},
}
