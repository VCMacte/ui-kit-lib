import cn from 'clsx'
import React, { FC } from 'react'
import '../ColorScheme/style.css'
import './CssLoader.css'

export type CssLoaderProps = {
	isLoading: boolean
}

const CssLoader: FC<CssLoaderProps> = ({ isLoading }) => {
	return (
		<div className={cn('ldsRing', isLoading && 'active')}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default CssLoader
