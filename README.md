# ui-kit-lib

**ButtonBase** props:
text?: string
onBtnClick?: () => void
isActive?: boolean
isDark?: boolean
isLight?: boolean
withBorder?: boolean
buttonType?: 'button' | 'submit' (default: 'button')
disabled?: boolean (default: false)
w100?: boolean (default: false)

**CssLoader** props:
isLoading: boolean

**CubeAbsLoader** props:
isActive: boolean

**DashPlusButton** props:
text: string
onBtnClick?: () => void

**HeaderLogo** no props

**InputWithLabel** props:
labelText: string
inputType: string
onInputChange: Dispatch`<SetStateAction<string>>`
inputValue: string

**NumberInput** props:
count: number
setCount: Dispatch`<SetStateAction<number>>`

**SelectFallList** props:
items: string[]
selectedItem: string
onSelect: React.Dispatch`<string>`
element: () => React.JSX.Element (SVG icon)
