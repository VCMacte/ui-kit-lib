import React, { FC } from 'react'
import ButtonBase from '../ButtonBase/ButtonBase'
import '../ColorScheme/style.css'
import './SelectFallList.css'

export type SelectFallListProps = {
	items: string[]
	selectedItem: string
	onSelect: React.Dispatch<string>
	element: () => React.JSX.Element
}

const SelectFallList: FC<SelectFallListProps> = ({
	items,
	selectedItem,
	onSelect,
	element: Svg,
}) => {
	return (
		<div className={'selectFall'}>
			<h2>
				<Svg />
				{selectedItem}
			</h2>
			<div className={'selectFall__listWrapper'}>
				<ul className={'selectFall__list'}>
					{items.map((item, index) => (
						<li key={index}>
							<ButtonBase
								text={item}
								onBtnClick={() => onSelect(item)}
								isActive={item === selectedItem}
								w100={true}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default SelectFallList
