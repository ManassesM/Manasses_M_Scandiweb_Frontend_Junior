import { theme } from 'config/theme'

export function NavLinkStyles({ isActive }: any) {
	return {
		color: isActive && theme.palette.main,
		borderBottom: isActive && `2px solid ${theme.palette.main}`,
		fontWeight: isActive && `${theme.typography.fontWeigth.semibold}`,
	}
}
