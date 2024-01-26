import React from 'react';
import { Text } from 'react-native';

import { IThemes } from '../../Types';

import { defaultProps } from '../../utils/constants/props/phone';

import { Container } from './styles';

const Phone: React.FC<IThemes> = ({theme = defaultProps}) => {
  return (
    <Container>
      <Text>🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷 🇧🇷</Text>
    </Container>
  );
};

export default Phone
