// Modules
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TextInput as TextInputRef } from "react-native";
import { Icon } from "react-native-elements";

// Utils
import { dataPhones } from "../../utils/constants/data/phone";
import { defaultProps } from "../../utils/constants/props/phone";
import { getStyles } from "../../utils";

// Locales
import { getTranslate } from "../../locales";

// Types
import { IPropsPhone } from "../../Types";
import {
  IPhoneRef,
  IPreparedMask,
  allPhoneInfoInTheWorld,
} from "../../Types/Phone";

// Styles
import {
  Container,
  TextLabel,
  TextInput,
  TextError,
  ContainerInput,
  Selected,
  Row,
  TextFlag,
  PreTextInput,
  TextFlagName,
} from "./styles";

const Phone: React.ForwardRefRenderFunction<IPhoneRef, IPropsPhone> = (
  {
    getValue,
    disabled = false,
    theme = defaultProps.theme,
    language = defaultProps.language,
    label = undefined,
    placeholder = undefined,
    countries = [],
    ...rest
  },
  ref
) => {
  const refInput = useRef<TextInputRef>(null);

  const [themes] = useState(getStyles(theme));
  const [translate] = useState(getTranslate(language));

  const [maxLength, setMaxLength] = useState<number>(1);
  const [errorMessage, setError] = useState<string>("");
  const [valuePhone, setValuePhone] = useState<string>("");
  const [isFocused, setIsFocus] = useState<undefined | string>();

  const [lengthValid, setLengthValid] = useState<number>(1);
  const [country, setCountry] = useState<allPhoneInfoInTheWorld>(
    {} as allPhoneInfoInTheWorld
  );

  const renderDataSelected = useCallback(() => {
    let countriesFiltered = dataPhones;
    if (countries.length > 0) {
      countriesFiltered = countriesFiltered.filter((country) =>
        countries.includes(country.countryCode)
      );
    }

    return countriesFiltered.map((value: allPhoneInfoInTheWorld, index) => {
      return {
        ...value,
        key: index,
        label:
          value.callingCode + " " + translate.phone.country[value.countryCode],
        component: (
          <TextFlagName>
            {`${value.flag} ${value.callingCode} ` +
              translate.phone.country[value.countryCode]}
          </TextFlagName>
        ),
      };
    });
  }, []);

  const changeCountry = useCallback((value: allPhoneInfoInTheWorld) => {
    const largestMask = value.phoneMasks.reduce((larger, current) => {
      return current.length > larger.length ? current : larger;
    }, "");

    setMaxLength(largestMask.length);
    setCountry(value);
  }, []);

  const onChangeText = useCallback((INPUT: string, MASKS: string[]) => {
    setError("");
    const input = INPUT.replace(/\D/g, "");

    if (!MASKS.length) return setError(translate.phone.error.countryNotFound);

    const largestMask = MASKS.reduce((larger, current) => {
      return current.length > larger.length ? current : larger;
    }, "");

    if (input.length > largestMask.replace(/[^#]/g, "").length) {
      const labelError = label
        ? label.toLocaleLowerCase()
        : translate.phone.label;
      return setError(
        translate.phone.error.labelInvalid.replace("{{label}}", labelError)
      );
    }

    const preparedMask: IPreparedMask[] = MASKS.map((value) => ({
      mask: value.replace(/\d/g, "#"),
      numSubstitutions:
        value.replace(/[^#]/g, "").length + value.replace(/\D/g, "").length,
    }));

    const chosen = preparedMask.find(
      (m) => input.length <= m.numSubstitutions
    ) as IPreparedMask;
    const { mask, numSubstitutions } = chosen;
    setLengthValid(numSubstitutions);

    if (!!mask) {
      let output = "";
      let countInput = 0;

      for (let i = 0; i < mask.length; i++) {
        if (countInput >= input.length) break;
        output += mask[i] === "#" ? input[countInput++] : mask[i];
      }

      setValuePhone(output);
      getValue && getValue(output);
    } else {
      setError(translate.phone.error.maskNotFound);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    setValuePhone: (valuePhone = "", valueCountry = "BR") => {
      if (!valueCountry) return setError(translate.phone.error.countryNotFound);

      const currentPhone = dataPhones.find(
        (country) => valueCountry === country.countryCode
      );
      if (currentPhone) {
        changeCountry(currentPhone);
        onChangeText(
          valuePhone.replace(currentPhone.callingCode, ""),
          currentPhone.phoneMasks
        );
      }
    },
    setValueCountry: (valueCountry = "BR") => {
      if (!valueCountry) return setError(translate.phone.error.countryNotFound);

      const currentPhone = dataPhones.find(
        (country) => valueCountry === country.countryCode
      );
      if (currentPhone) {
        changeCountry(currentPhone);
      }
    },
    getValuePhone: () => {
      return {
        valuePhone,
        countryCode: country.countryCode,
        callingCode: country.callingCode,
      };
    },
    setErrorPhone: (error: string) => setError(error),
    isValid: () => {
      const onlyNumber = valuePhone.replace(/[^0-9]+/g, "");
      return onlyNumber.length >= lengthValid;
    },
    focus: () => {
      setIsFocus(theme?.colors?.primary);
      refInput?.current?.focus();
    },
  }));

  return (
    <Container>
      <TextLabel
        focus={isFocused}
        theme={
          !!errorMessage.length
            ? { ...themes.font?.label, color: themes.font?.error.color }
            : themes.font?.label
        }
      >
        {label || translate.phone.label}
      </TextLabel>
      <Row>
        <Selected
          focus={isFocused}
          disabled={!!disabled}
          error={!!errorMessage.length ? themes?.font?.error?.color : ""}
          renderItem={() => <></>}
          outline={!!theme?.outline}
          data={renderDataSelected()}
          disable={disabled ? themes?.colors?.disabled : ""}
          onChange={(value) => {
            changeCountry(value as allPhoneInfoInTheWorld);
            setValuePhone("");
            getValue && getValue("");
          }}
        >
          <Row>
            <TextFlag>{country.flag}</TextFlag>
            <Icon
              type="font-awesome"
              name="caret-down"
              size={25}
              color="#999"
            />
          </Row>
        </Selected>

        <ContainerInput
          focus={isFocused}
          error={!!errorMessage.length ? themes?.font?.error?.color : ""}
          outline={!!theme?.outline}
          disable={disabled ? themes?.colors?.disabled : ""}
        >
          {country.callingCode && (
            <PreTextInput editable={false} theme={themes?.font?.input}>
              {country.callingCode}
            </PreTextInput>
          )}
          <TextInput
            {...rest}
            ref={refInput}
            value={valuePhone}
            editable={!disabled}
            maxLength={maxLength}
            onBlur={() => setIsFocus("")}
            theme={themes?.font?.input}
            onFocus={() => setIsFocus(themes.colors.primary)}
            placeholder={placeholder || translate.phone.placeholder}
            onChangeText={(text) =>
              onChangeText(text, country.phoneMasks || [])
            }
          />
        </ContainerInput>
      </Row>
      <TextError theme={themes?.font?.error}>{errorMessage}</TextError>
    </Container>
  );
};

export default forwardRef(Phone);
