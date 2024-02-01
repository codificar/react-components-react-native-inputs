// Types
import { IColor, IPropsPhone } from "../../../Types";

const defaultColors: IColor = {
  background: '#FFF',
  primary: '#000',
  secondary: '#687a95',
  disabled: '#C6CBD4',
}

export const defaultProps: IPropsPhone = {
  language: 'pt-br',
  label: 'TELEFONE',
  placeholder: 'Insira',
  theme: {
    colors: defaultColors,
    font: {
      label: {
        color: defaultColors.primary,
        disabledColor: defaultColors.disabled,
        size: 16,
      },
      placeholder: {
        color: '#BBB',
        disabledColor: defaultColors.disabled,
        size: 14,
      },
      error: {
        color: '#DC3545',
        disabledColor: defaultColors.disabled,
        size: 12,
      },
    }
  },
}
