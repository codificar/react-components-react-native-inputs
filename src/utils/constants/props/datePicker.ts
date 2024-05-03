// Types
import { IPropsDatePicker } from "../../../Types";

// Utils
import { defaultColors } from "../../../utils";

export const defaultProps: Pick<IPropsDatePicker, 'language' | 'theme'> = {
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
