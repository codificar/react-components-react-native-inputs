// Types
import { IColor, IThemes } from "../Types";

// Utils
import { defaultProps } from "./constants/props/phone";

const defaultColors: IColor = {
  background: '#FFF',
  primary: '#000',
  secondary: '#687a95',
  disabled: '#EEE',
}

const getStyles = (theme?: IThemes) => {
  const colors = {
    background: theme?.colors?.background || defaultProps.theme?.colors?.background,
    primary: theme?.colors?.primary || defaultProps.theme?.colors?.primary,
    secondary: theme?.colors?.secondary || defaultProps.theme?.colors?.secondary,
    disabled: theme?.colors?.disabled || defaultProps.theme?.colors?.disabled
  }
  
  const font = {
    label: {
      size: theme?.font?.label?.size || defaultProps.theme?.font?.label?.size,
      color: theme?.font?.label?.color || defaultProps.theme?.font?.label?.color,
    },
    input: {
      size: theme?.font?.input?.size || defaultProps.theme?.font?.input?.size,
      color: theme?.font?.input?.color || defaultProps.theme?.font?.input?.color,
    },
    error: {
      size: theme?.font?.error?.size || defaultProps.theme?.font?.error?.size,
      color: theme?.font?.error?.color || defaultProps.theme?.font?.error?.color,
    },
  }

  return {colors, font}
}

export { getStyles, defaultColors }