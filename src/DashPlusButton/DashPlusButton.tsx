import React, { FC } from 'react'
import '../ColorScheme/style.css'
import './DashPlusButton.css'

export type DashPlusButtonProps = {
	text: string
	onBtnClick?: () => void
}

const DashPlusButton: FC<DashPlusButtonProps> = ({ text, onBtnClick }) => {
	return (
		<button className={'dashPlusBtn'} onClick={onBtnClick}>
			<div>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.99935 4.16675V15.8334M4.16602 10.0001H15.8327'
						strokeWidth='1.67'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
			<span>{text}</span>
		</button>
	)
}

export default DashPlusButton
