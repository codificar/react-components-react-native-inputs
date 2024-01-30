import React from 'react';
// import { Text } from 'react-native';

import { IThemes } from '../../Types';

import { defaultProps } from '../../utils/constants/props/phone';

import { Container, TextLabel, TextInput, TextError } from './styles';

const Phone: React.FC<IThemes> = ({theme = defaultProps.theme}) => {
  return (
    <Container>
      <TextLabel  theme={theme?.font?.label} >Campo</TextLabel>
      <TextInput></TextInput>
      <TextError theme={theme?.font?.error} >ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR </TextError>
    </Container>
  );
};

export default Phone
