// Types
import { IColor, IPropsPhone } from "../../../Types";

const defaultColors: IColor = {
  background: '#FFF',
  primary: '#000',
  secondary: '#687a95',
  disabled: '#EEE',
}

export const defaultProps: Omit<IPropsPhone, 'getValue' | 'label' | 'placeholder'> = {
  language: 'pt-br',
  theme: {
    colors: defaultColors,
    font: {
      label: {
        color: '#6C757D',
        size: 12,
      },
      input: {
        color: '#000',
        size: 16,
      },
      error: {
        color: '#DC3545',
        size: 12,
      },
    }
  },
}
