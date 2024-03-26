// Types
import { IFont, IThemes } from "../default";

/**
 * Interface for date picker reference management.
 * Provides methods and properties to manage date input fields within a React component.
 *
 * @interface IDatePickerRef
 */
export interface IDatePickerRef {
  /**
   * Sets the date value for the date picker.
   * @param value - The date to set in the date picker.
   */
  setValueDate: (value: Date | string) => void;

  /**
   * Retrieves the current date value from the date picker.
   * @type {React.Dispatch<void>}
   */
  getValueDate: React.Dispatch<void>;

  /**
   * Sets the error message for the date picker.
   * @type {React.Dispatch<string>}
   */
  setErrorDate: React.Dispatch<string>;

  /**
   * Dispatches the validation status of the date picker's current date value.
   * @type {React.Dispatch<boolean>}
   */
  isValid: React.Dispatch<boolean>;

  /**
   * Triggers focus on the date picker input field.
   * @type {React.Dispatch<void>}
   */
  focus: React.Dispatch<void>;
}


/**
 * Date component properties
 * 
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