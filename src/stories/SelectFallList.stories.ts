import type { Meta } from '@storybook/react'

import SelectFallList from '../SelectFallList/SelectFallList'
import UserSvg from './Assets/UserSvg'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'SelectFallList',
	component: SelectFallList,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SelectFallList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BaseSelectFallList: Story = {
	args: {
		items: ['Marcus Torff', 'Alen Delon', 'Boris Britva', 'Leonid Yakubovich'],
		selectedItem: 'Marcus Torff',
		element: UserSvg,
	},
}
