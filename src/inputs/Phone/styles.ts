// Modules
import styled, { css } from 'styled-components/native';
import ModalSelector from 'react-native-modal-selector-searchable';

// Types
import {
  IStyleContainerInput,
  IStylePreTextInput,
  IStyleSelected,
  IStyleTextError,
  IStyleTextInput,
  IStyleTextLabel
} from '../../Types/Phone';

export const Container = styled.View`
  width: 100%;
  display: flex;
  padding: 8px 0;
`;

export const TextLabel = styled.Text<IStyleTextLabel>`
  color: #000;
  margin: 4px ;

  ${props => (props.theme.color) &&
    css`
      color: ${props.theme.color};
    `}

  ${props => (props.focus) &&
    css`
      color: ${props.focus};
    `}

  ${props => (props.theme.size) &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const TextError = styled.Text<IStyleTextError>`
  color: #c80000;
  margin: 2px 8px;

  ${props => (props.theme.color) &&
    css`
      color: ${props.theme.color};
    `}

  ${props => (props.theme.size) &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const ContainerInput = styled.View<IStyleContainerInput>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-color: #ccc;
  border-bottom-width: 1px;
  margin-left: 8px ;
  padding: 0 8px ;
  height: 40px;

  ${props => (props.disable) &&
    css`
      background-color: ${props.disable};
    `}

  ${props => (props.outline) &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `}

  ${props => (props.focus) &&
    css`
      border-color: ${props.focus};
    `}

  ${props => (props.error) &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
    `}

  ${props => (!!props.error && props.outline) &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
      border: 1px solid ${props.error};
      border-radius: 4px;
    `}
`;

export const PreTextInput = styled.TextInput<IStylePreTextInput>`
  color: black;

  ${props => (props.theme.color) &&
    css`
      color: ${props.theme.color};
    `}

  ${props => (props.theme.size) &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const TextInput = styled.TextInput<IStyleTextInput>`
  flex: 1;

  ${props => (props.theme.color) &&
    css`
      color: ${props.theme.color};
    `}

  ${props => (props.theme.size) &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const Selected = styled(ModalSelector)<IStyleSelected>`
  padding: 0 8px;
  border-color: #ccc;
  border-bottom-width: 1px;
  height: 40px;
  align-items: center;
  justify-content: center;

  ${props => (props.focus) &&
    css`
      border-color: ${props.focus};
    `}

  ${props => (props.disable) &&
    css`
      background-color: ${props.disable};
    `}

  ${props => (props.outline) &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `}

    ${props => (props.error) &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
    `}

  ${props => (!!props.error && props.outline) &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
      border: 1px solid ${props.error};
      border-radius: 4px;
    `}
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextFlag = styled.Text`
  font-size: 24px;
  margin-right: 8px;
`

export const TextFlagName = styled.Text`
  font-size: 16px;
  margin-right: 8px;
`
