// Types
import { IColor, IPropsPhone } from "../../../Types";

const defaultColors: IColor = {
  background: '#FFF',
  primary: '#000',
  secondary: '#687a95',
  disabled: '#C6CBD4',
}

export const defaultProps: Omit<IPropsPhone, 'getValue' | 'defaultValue'> = {
  language: 'pt-br',
  label: 'TELEFONE',
  placeholder: 'Insira seu telefone',
  defaultSelected: "BR",
  theme: {
    colors: defaultColors,
    font: {
      label: {
        color: defaultColors.primary,
        disabledColor: defaultColors.disabled,
        size: 18,
      },
      placeholder: {
        color: '#BBB',
        disabledColor: defaultColors.disabled,
        size: 16,
      },
      error: {
        color: '#DC3545',
        disabledColor: defaultColors.disabled,
        size: 14,
      },
    }
  },
}
