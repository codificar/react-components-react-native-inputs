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
  language = defaultProps.language,
  label = defaultProps.label,
  theme = defaultProps.theme,
  countries = [],
  ...rest
}) => {
  const [state, setstate] = useState<allPhoneInfoInTheWorld>({flag:' '} as allPhoneInfoInTheWorld)
  const [valuePhone, setValuePhone] = useState<string>('')
  const [maxLength, setMaxLength] = useState(1)
  const [error, setError] = useState('')
  const [translate] = useState(getTranslate(language))

  const renderDataSelected = useCallback(() => {
    let countriesFiltered = dataPhones
    if (countries.length > 0) {
      countriesFiltered = countriesFiltered.filter(country => countries.includes(country.countryCode))
    }

    return countriesFiltered.map((value: allPhoneInfoInTheWorld, index) => {
      return {
        ...value,
        key: index,
        label: value.callingCode + " " + value.name,
        component: <TextFlagName>{`${value.flag} ${value.callingCode} ` + translate(`country.${value.countryCode}`)}</TextFlagName>
      }
    })
  }, []);

  const changeContry = useCallback((value: allPhoneInfoInTheWorld ) => {
    const maiorString = value.phoneMasks.reduce((maior, atual) => {
      return atual.length > maior.length ? atual : maior;
    }, "");

    setMaxLength(maiorString.length)
    setValuePhone('')
    setstate(value)
  }, []);

  const onChangeText = useCallback((INPUT: string, MASKS: string[]) => {
    const input = INPUT.replace(/\D/g, '');
    
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
    } else {
      setError('Nenhuma mascara selecionada')
    }
  }, []);


  return (
    <Container>
      <TextLabel theme={theme?.font?.label} disabled>{label}</TextLabel>
      <Row>
        
      <Selected
      renderItem={() => <></>}
      onChange={(value) => changeContry(value as allPhoneInfoInTheWorld)}
      data={renderDataSelected()}
      >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        
        <TextFlag>{state.flag}</TextFlag>
        <Icon type="font-awesome" name="caret-down" size={25} color="#999" />
      </View>
      </Selected>

      <ContainerInput>
        {state.callingCode && <PreTextInput editable={false}>{state.callingCode}</PreTextInput>}
        <TextInput 
          {...rest}
          value={valuePhone}
          maxLength={maxLength}
          onChangeText={text => onChangeText(text, state.phoneMasks || [])}
        ></TextInput>
      </ContainerInput>
      </Row>
      <TextError theme={theme?.font?.error} >{error}</TextError>
    </Container>
  );
};

export default Phone
