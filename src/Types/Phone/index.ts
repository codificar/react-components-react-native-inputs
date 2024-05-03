// Types
import { IFont, IProps } from "../default";

export type allCountryCodes = 
  "AD"|
  "AE"|
  "AF"|
  "AG"|
  "AI"|
  "AL"|
  "AM"|
  "AN"|
  "AO"|
  "AQ"|
  "AR"|
  "AS"|
  "AT"|
  "AU"|
  "AW"|
  "AX"|
  "AZ"|
  "BA"|
  "BB"|
  "BD"|
  "BE"|
  "BF"|
  "BG"|
  "BH"|
  "BI"|
  "BJ"|
  "BL"|
  "BM"|
  "BN"|
  "BO"|
  "BR"|
  "BS"|
  "BT"|
  "BW"|
  "BY"|
  "BZ"|
  "CA"|
  "CC"|
  "CD"|
  "CF"|
  "CG"|
  "CH"|
  "CI"|
  "CK"|
  "CL"|
  "CM"|
  "CN"|
  "CO"|
  "CR"|
  "CU"|
  "CV"|
  "CX"|
  "CY"|
  "CZ"|
  "DE"|
  "DJ"|
  "DK"|
  "DM"|
  "DO"|
  "DZ"|
  "EC"|
  "EE"|
  "EG"|
  "ER"|
  "ES"|
  "ET"|
  "FI"|
  "FJ"|
  "FK"|
  "FM"|
  "FO"|
  "FR"|
  "GA"|
  "GB"|
  "GD"|
  "GE"|
  "GF"|
  "GG"|
  "GH"|
  "GI"|
  "GL"|
  "GM"|
  "GN"|
  "GP"|
  "GQ"|
  "GR"|
  "GS"|
  "GT"|
  "GU"|
  "GW"|
  "GY"|
  "HK"|
  "HN"|
  "HR"|
  "HT"|
  "HU"|
  "ID"|
  "IE"|
  "IL"|
  "IM"|
  "IN"|
  "IO"|
  "IQ"|
  "IR"|
  "IS"|
  "IT"|
  "JE"|
  "JM"|
  "JO"|
  "JP"|
  "KE"|
  "KG"|
  "KH"|
  "KI"|
  "KM"|
  "KN"|
  "KP"|
  "KR"|
  "KW"|
  "KY"|
  "KZ"|
  "LA"|
  "LB"|
  "LC"|
  "LI"|
  "LK"|
  "LR"|
  "LS"|
  "LT"|
  "LU"|
  "LV"|
  "LY"|
  "MA"|
  "MC"|
  "MD"|
  "ME"|
  "MF"|
  "MG"|
  "MH"|
  "MK"|
  "ML"|
  "MM"|
  "MN"|
  "MO"|
  "MP"|
  "MQ"|
  "MR"|
  "MS"|
  "MT"|
  "MU"|
  "MV"|
  "MW"|
  "MX"|
  "MY"|
  "MZ"|
  "NA"|
  "NC"|
  "NE"|
  "NF"|
  "NG"|
  "NI"|
  "NL"|
  "NO"|
  "NP"|
  "NR"|
  "NU"|
  "NZ"|
  "OM"|
  "PA"|
  "PE"|
  "PF"|
  "PG"|
  "PH"|
  "PK"|
  "PL"|
  "PM"|
  "PN"|
  "PR"|
  "PS"|
  "PT"|
  "PW"|
  "PY"|
  "QA"|
  "RE"|
  "RO"|
  "RS"|
  "RU"|
  "RW"|
  "SA"|
  "SB"|
  "SC"|
  "SD"|
  "SE"|
  "SG"|
  "SH"|
  "SI"|
  "SJ"|
  "SK"|
  "SL"|
  "SM"|
  "SN"|
  "SO"|
  "SR"|
  "ST"|
  "SV"|
  "SX"|
  "SY"|
  "SZ"|
  "TC"|
  "TD"|
  "TG"|
  "TH"|
  "TJ"|
  "TK"|
  "TL"|
  "TM"|
  "TN"|
  "TO"|
  "TR"|
  "TT"|
  "TV"|
  "TW"|
  "TZ"|
  "UA"|
  "UG"|
  "US"|
  "UY"|
  "UZ"|
  "VA"|
  "VC"|
  "VE"|
  "VG"|
  "VI"|
  "VN"|
  "VU"|
  "WF"|
  "WS"|
  "YE"|
  "YT"|
  "ZA"|
  "ZM"|
  "ZW"


export type allPhoneInfoInTheWorld = {
  callingCode: string;
  flag: string;
  countryCode: allCountryCodes;
  phoneMasks: string[];
}
/**
 * Interface for phone reference management.
 * Provides methods and properties to manage phone input fields within a React component.
 */
export interface IPhoneRef {
  /**
   * Sets the phone number value.
   * @param valuePhone - The phone number to set.
   * @param valueCountry - Optional. The country code associated with the phone number.
   */
  setValuePhone: (valuePhone: string, valueCountry?: allCountryCodes) => void;

  /**
   * React dispatcher to set the current country code.
   * @type {React.Dispatch<allCountryCodes>}
   */
  setValueCountry: React.Dispatch<allCountryCodes>;

  /**
   * Retrieves the current phone number value.
   * @type {React.Dispatch<void>}
   */
  getValuePhone: React.Dispatch<void>;

  /**
   * Sets the error message for the phone number.
   * @type {React.Dispatch<string>}
   */
  setErrorPhone: React.Dispatch<string>;

  /**
   * Dispatches the validation status of the phone number.
   * @type {React.Dispatch<boolean>}
   */
  isValid: React.Dispatch<boolean>;

  /**
   * Triggers focus on the phone number input field.
   * @type {React.Dispatch<void>}
   */
  focus: React.Dispatch<void>;
}

/**
 * Phone component properties
 * 
 * @interface IPropsPhone
 * @extends TextInputProps
 */
export interface IPropsPhone extends IProps {
  /**
   * @description Country filter to appear in the modal
   * @type {allCountryCodes[]}
   * @enum {, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, ST, SV, SX, SY, SZ, TC, TD, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW}
  */
  countries?: allCountryCodes[];
}

export interface IPreparedMask {
  mask: string,
  numSubstitutions: number
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

export interface IStylePreTextInput {
  theme: IFont
}

export interface IStyleTextInput {
  theme: IFont
}

export interface IStyleSelected {
  error?: string,
  outline: boolean,
  disable?: string,
  focus?: string,
}