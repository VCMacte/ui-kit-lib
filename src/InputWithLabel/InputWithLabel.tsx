import React, { Dispatch, FC, SetStateAction } from 'react'
import '../ColorScheme/style.css'
import './InputWithLabel.css'

export type InputWithLabelProps = {
	labelText: string
	inputType: string
	onInputChange: Dispatch<SetStateAction<string>>
	inputValue: string
}

const InputWithLabel: FC<InputWithLabelProps> = ({
	labelText,
	inputType,
	onInputChange,
	inputValue,
}) => {
	return (
		<label className={'inputBase'}>
			<span>{labelText}</span>
			<input
				type={inputType}
				value={inputValue}
				onChange={e => onInputChange(e.target.value)}
			/>
		</label>
	)
}

export default InputWithLabel
