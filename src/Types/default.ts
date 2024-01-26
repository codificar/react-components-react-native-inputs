type IHexColor = `#${string}` | string;

export type IColor = {
  background?: IHexColor,
  primary?: IHexColor,
  secondary?: IHexColor,
  disabled?: IHexColor,
}

export type IFont = {
  size?: number,
  family?: string,
  weight?: string,
  color?: IHexColor,
  disabledColor?: IHexColor,
}

export interface IThemes {
  theme?: {
    colors?: IColor,
    font?: {
      label?: IFont,
      placeholder?: IFont,
      error?: IFont,
    },
    width?: string | number,
    height?: string | number,
  }
}