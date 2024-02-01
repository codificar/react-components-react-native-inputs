// Types
import { IProps } from "../default";

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
 * Phone component properties
 * 
 * @interface IPropsPhone
 * @extends TextInputProps
 */
export interface IPropsPhone extends IProps {
  /**
   * @description Function to get value from country
   * @type {React.Dispatch<string>}
  */
  getValueCountry?: React.Dispatch<allCountryCodes>;

  /**
   * @description Country filter to appear in the modal
   * @type {allCountryCodes[]}
   * @enum {, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, ST, SV, SX, SY, SZ, TC, TD, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW}
  */
  countries?: allCountryCodes[];
  
  /**
   * @description Selected default country code. Use one of the country codes such as BR, PY, ES, EN etc.
   * @enum {, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BR, BS, BT, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, ST, SV, SX, SY, SZ, TC, TD, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW}
   * @type {allCountryCodes}
  */
  defaultSelected?: allCountryCodes;
}