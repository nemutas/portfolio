import { css } from '@emotion/css';

export const BP_MD = '1280px'
export const BP_SM = '960px'
export const BP_SS = '780px'
export const BP_XS = '600px'
export const BP_XXS = '480px'

type BreakPointType = typeof BP_MD | typeof BP_SM | typeof BP_SS | typeof BP_XS | typeof BP_XXS

export const sDisplayNone_Width = (breakpoint: BreakPointType) => css`
	@media (max-width: ${breakpoint}) {
		display: none;
	}
`

export const sDisplayNone_Height = (breakpoint: BreakPointType) => css`
	@media (max-height: ${breakpoint}) {
		display: none;
	}
`

export const sDisplayNone_Width_MD = css`
	${sDisplayNone_Width(BP_MD)}
`

export const sDisplayNone_Width_SM = css`
	${sDisplayNone_Width(BP_SM)}
`

export const sDisplayNone_Height_SM = css`
	${sDisplayNone_Height(BP_SM)}
`

export const sDisplayNone_Height_XS = css`
	${sDisplayNone_Height(BP_XS)}
`
