// Modules
import React, { useCallback, useEffect, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { Icon } from "react-native-elements";

// Utils
import { dataPhones } from '../../utils/constants/data/phone';
import { defaultProps } from '../../utils/constants/props/phone';

// Locales
import { getTranslate } from '../../locales';

// Types
import { IPropsPhone } from '../../Types';
import { allPhoneInfoInTheWorld } from '../../Types/Phone';

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
  TextFlagName
} from './styles';

const Phone: React.FC<IPropsPhone> = ({
  getValue,
  getValueCountry = undefined,
  defaultValue = '',
  disabled = false,
  language = defaultProps.language,
  label = defaultProps.label,
  theme = defaultProps.theme,
  defaultSelected = defaultProps.defaultSelected,
  countries = [],
  error = '',
  ...rest
}) => {
  const [focus, setFocus] = useState<undefined | string>()
  const [maxLength, setMaxLength] = useState(1)
  const [errorMessage, setError] = useState(error)
  const [translate] = useState(getTranslate(language))
  const [valuePhone, setValuePhone] = useState<string>('')
  const [country, setCountry] = useState<allPhoneInfoInTheWorld>({} as allPhoneInfoInTheWorld)


  const renderDataSelected = useCallback(() => {
    let countriesFiltered = dataPhones
    if (countries.length > 0) {
      countriesFiltered = countriesFiltered.filter(country => countries.includes(country.countryCode))
    }

    return countriesFiltered.map((value: allPhoneInfoInTheWorld, index) => {
      return {
        ...value,
        key: index,
        label: value.callingCode + " " + translate.country[value.countryCode],
        component: <TextFlagName>{`${value.flag} ${value.callingCode} ` + translate.country[value.countryCode]}</TextFlagName>
      }
    })
  }, []);

  const changeContry = useCallback((value: allPhoneInfoInTheWorld ) => {
    const largestMask = value.phoneMasks.reduce((larger, current) => {
      return current.length > larger.length ? current : larger;
    }, "");

    setMaxLength(largestMask.length)
    setValuePhone('')
    setCountry(value)
    getValueCountry && getValueCountry(translate.value.countryCode)
    getValue('')
  }, []);

  const onChangeText = useCallback((INPUT: string, MASKS: string[]) => {
    setError('')
    const input = INPUT.replace(/\D/g, '');

    if (!MASKS.length) return setError(error.maskNotFound)

    const largestMask = MASKS.reduce((larger, current) => {
      return current.length > larger.length ? current : larger;
    }, "");

    if (input.length > largestMask.length) return setError('Telefone invalido')

    const preparedMask = MASKS.map(value => ({
      mask: value.replace(/\d/g, '#'),
      numSubstitutions: value.replace(/[^#]/g, '').length + value.replace(/\D/g, '').length,
    }));

    const chosenMask = preparedMask.find(m => input.length <= m.numSubstitutions)?.mask;

    if (!!chosenMask){
      let output = '';
      let contadorInput = 0;

      for (let i = 0; i < chosenMask.length; i++) {
        if (contadorInput >= input.length) break;
        output += chosenMask[i] === '#' ? input[contadorInput++] : chosenMask[i];
      }

      setValuePhone(output);
      getValue(output)
    } else {
      setError('Nenhuma mascara selecionada')
    }
  }, []);

  useEffect(() => {
    const currentPhone = dataPhones.find(country => defaultSelected === country.countryCode)

    if (currentPhone) {
      changeContry(currentPhone)
      onChangeText(defaultValue.replace(currentPhone.callingCode, ""), currentPhone.phoneMasks)
    }
  }, [changeContry, onChangeText])

  return (
    <Container>
      <TextLabel focus={focus} theme={theme?.font?.label}>{label}</TextLabel>
      <Row>
        
      <Selected
      focus={focus}
      disabled={!!disabled}
      disable={disabled ? theme?.colors?.disabled : ''}
      renderItem={() => <></>}
      onChange={(value) => changeContry(value as allPhoneInfoInTheWorld)}
      data={renderDataSelected()}
      >        
        <Row>
          <TextFlag>{country.flag}</TextFlag>
          <Icon type="font-awesome" name="caret-down" size={25} color="#999" />
        </Row>
      </Selected>

      <ContainerInput disable={disabled ? theme?.colors?.disabled : ''} focus={focus}>
        {country.callingCode && <PreTextInput editable={false} theme={theme?.font?.placeholder}>{country.callingCode}</PreTextInput>}
        <TextInput 
          {...rest}
          editable={!disabled}
          value={valuePhone}
          maxLength={maxLength}
          onBlur={() => setFocus('')}
          theme={theme?.font?.placeholder}
          onFocus={() => setFocus(theme?.colors?.primary)}
          onChangeText={text => onChangeText(text, country.phoneMasks || [])}
        ></TextInput>
      </ContainerInput>
      </Row>
      <TextError theme={theme?.font?.error} >{errorMessage}</TextError>
    </Container>
  );
};

export default Phone
