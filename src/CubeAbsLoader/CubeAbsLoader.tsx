import cn from 'clsx'
import React, { FC } from 'react'
import '../ColorScheme/style.css'
import './CubeAbsLoader.css'

export type CubeAbsLoaderProps = {
	isActive: boolean
}

const CubeAbsLoader: FC<CubeAbsLoaderProps> = ({ isActive }) => {
	return (
		<div className={cn('cubeAbsLoader', isActive && 'active')}>
			<div className='scene'>
				<div className='cube-wrapper'>
					<div className='cube'>
						<div className='cube-faces'>
							<div className='cube-face shadow'></div>
							<div className='cube-face bottom'></div>
							<div className='cube-face top'></div>
							<div className='cube-face left'></div>
							<div className='cube-face right'></div>
							<div className='cube-face back'></div>
							<div className='cube-face front'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CubeAbsLoader
