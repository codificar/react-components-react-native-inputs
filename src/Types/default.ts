// Types
import { alCountryCodes } from "./Phone";

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
  colors?: IColor,
  font?: {
    label?: IFont,
    placeholder?: IFont,
    error?: IFont,
  }
}

export interface IProps {
  label?: string;
  theme?: IThemes;
  countries?: alCountryCodes[]
}