// Types
import { IColor, IPropsPhone } from "../../../Types";

const defaultColors: IColor = {
  background: '#FFF',
  primary: '#000',
  secondary: '#687a95',
  disabled: '#C6CBD4',
}

export const defaultProps: Omit<IPropsPhone, 'getValue' | 'defaultValue' | 'label' | 'placeholder'> = {
  language: 'pt-br',
  defaultSelected: "BR",
  theme: {
    colors: defaultColors,
    font: {
      label: {
        color: defaultColors.primary,
        size: 16,
      },
      input: {
        color: '#000',
        size: 16,
      },
      error: {
        color: '#DC3545',
        size: 14,
      },
    }
  },
}
