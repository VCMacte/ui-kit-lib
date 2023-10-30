import React, { Dispatch, FC, SetStateAction } from 'react'
import '../ColorScheme/style.css'
import './NumberInput.css'

export type NumberInputProps = {
	count: number
	setCount: Dispatch<SetStateAction<number>>
}

const NumberInput: FC<NumberInputProps> = ({ count, setCount }) => {
	const incpxentCount = () => {
		if (count > 998) return
		setCount((state: number) => ++state)
	}

	const decpxentCount = () => {
		if (count < 2) return
		setCount((state: number) => --state)
	}

	const validateNumInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
		if (+evt.target.value > 999) setCount(999)
		else if (+evt.target.value < 1) setCount(1)
		else setCount(+evt.target.value)
	}

	return (
		<div className={'numberInput'}>
			<button type='button' onClick={decpxentCount}>
				-
			</button>
			<input
				type='number'
				value={count}
				onChange={validateNumInput}
				max='999'
				min='1'
			/>
			<button type='button' onClick={incpxentCount}>
				+
			</button>
		</div>
	)
}

export default NumberInput
