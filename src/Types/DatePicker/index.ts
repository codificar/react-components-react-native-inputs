// Types
import { IFont, IThemes } from "../default";

/**
 * @description Interface for date picker reference management. Provides methods and properties to manage date input fields within a React component.
 *
 * @interface IDatePickerRef
 */
export interface IDatePickerRef {
  /**
   * @description Sets the date value for the date picker.
   * @param value - The date to set in the date picker.
   */
  setValueDate: (value: Date) => void;

  /**
   * @description Retrieves the current date value from the date picker.
   * @type {React.Dispatch<void>}
   */
  getValueDate: React.Dispatch<void>;

  /**
   * @description Sets the error message for the date picker.
   * @type {React.Dispatch<string>}
   */
  setErrorDate: React.Dispatch<string>;

  /**
   * @description Dispatches the validation status of the date picker's current date value.
   * @type {React.Dispatch<boolean>}
   */
  isValid: React.Dispatch<boolean>;

  /**
   * @description Checks if the date has a minimum age
   * @param value number
   */
  isValidMinAge: (value: number) => boolean;

  /**
   * @description Triggers clear on the date picker input field.
   * @type {React.Dispatch<void>}
   */
  clear: React.Dispatch<void>;

  /**
   * @description Triggers focus on the date picker input field.
   * @type {React.Dispatch<void>}
   */
  focus: React.Dispatch<void>;
}


/**
 * @description Date component properties
 * @interface IPropsDatePicker
 */
export interface IPropsDatePicker {
  /**
   * @description Language for the phone component
   * @type {string}
  */
  language: string;

  /**
   * @description Optional label to display above the input field
   * @type {string}
  */
  label?: string;

  /**
   * @description Optional placeholder to display above the input field
   * @type {string}
  */
  placeholder?: string;

  /**
   * @description Optional disable the input field
   * @type {boolean}
  */
  disabled?: boolean;

  /**
   * @description Modal confirm button text
   * @type {string}
  */
  confirmText?: string;

  /**
   * @description Modal cancel button text
   * @type {string}
  */
  cancelText?: string;

  /**
   * @description Modal title. Set to null to remove
   * @type {string}
  */
  title?: string;

  /**
   * @description Optional disable the icon in input field
   * @type {boolean}
  */
  showIcon?: boolean;

  /**
   * @description Theme for the phone component
   * @type {IThemes}
  */
  theme?: IThemes;

  /**
   * @description Function triggered when finishing editing
   * @type {React.Dispatch<void>}
   */
  onSubmitEditing?: React.Dispatch<void>
}

export interface IStyleTextLabel {
  focus?: string,
  theme: IFont
}

export interface IStyleTextError {
  theme: IFont
}

export interface IStyleContainerInput {
  error?: string,
  outline: boolean,
  disable?: string,
  focus?: string,
}

export interface IStyleTextInput {
  theme: IFont
}