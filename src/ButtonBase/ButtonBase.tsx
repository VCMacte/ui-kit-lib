import cn from 'clsx'
import React, { ButtonHTMLAttributes, FC } from 'react'
import '../ColorScheme/style.css'
import './ButtonBase.css'

export interface IButtonBase extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
	onBtnClick?: () => void
	isActive?: boolean
	children?: JSX.Element
	isDark?: boolean
	isLight?: boolean
	withBorder?: boolean
	buttonType?: 'button' | 'submit'
	disabled?: boolean
	w100?: boolean
}

const ButtonBase: FC<IButtonBase> = ({
	text,
	onBtnClick,
	isActive,
	children,
	isDark,
	isLight,
	withBorder,
	buttonType = 'button',
	disabled = false,
	w100 = false,
}) => {
	return (
		<button
			onClick={onBtnClick}
			type={buttonType}
			className={cn(
				'buttonBase',
				isActive && 'active',
				isDark && 'dark',
				isLight && 'light',
				withBorder && 'withBorder',
				w100 ?? 'w100'
			)}
			disabled={disabled}
		>
			{children}
			{text && <span>{text}</span>}
		</button>
	)
}

export default ButtonBase
