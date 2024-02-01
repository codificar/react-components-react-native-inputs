// Modules
import React from "react";
import { TextInputProps } from "react-native";

// Types
import { allCountryCodes } from "./Phone";

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

export interface IProps extends TextInputProps {
  /**
   * @description Function to get phone number
   * @type {React.Dispatch<string>}
  */
  getValue: React.Dispatch<string>;
  
  /**
   * @description Default value phone number
   * @type {IThemes}
  */
  defaultValue: string;

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
   * @description Optional disable the input field
   * @type {boolean}
  */
  disabled?: string;
  
  /**
   * @description Error message to be displayed in case of failed validation
   * @type {string}
  */
  error?: string;
  
  /**
   * @description Theme for the phone component
   * @type {IThemes}
  */
  theme?: IThemes;
}
