// Modules
import styled, { css } from "styled-components/native";

// Types
import {
  IStyleContainerInput,
  IStyleTextError,
  IStyleTextInput,
  IStyleTextLabel,
} from "../../Types/DatePicker";

export const Container = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 8px 0;
`;

export const TextLabel = styled.Text<IStyleTextLabel>`
  color: #000;
  margin: 4px;

  ${(props) =>
    props.theme.color &&
    css`
      color: ${props.theme.color};
    `}

  ${(props) =>
    props.focus &&
    css`
      color: ${props.focus};
    `}

  ${(props) =>
    props.theme.size &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const TextError = styled.Text<IStyleTextError>`
  color: #c80000;
  margin: 2px 8px;
  flex: 1;

  ${(props) =>
    props.theme.color &&
    css`
      color: ${props.theme.color};
    `}

  ${(props) =>
    props.theme.size &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const ContainerInput = styled.TouchableOpacity<IStyleContainerInput>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-color: #ccc;
  border-bottom-width: 1px;
  padding: 0 8px;
  height: 40px;

  ${(props) =>
    props.disable &&
    css`
      background-color: ${props.disable};
    `}

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid #ccc;
      border-radius: 4px;
    `}

  ${(props) =>
    props.focus &&
    css`
      border-color: ${props.focus};
    `}

  ${(props) =>
    props.error &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
    `}

  ${(props) =>
    !!props.error &&
    props.outline &&
    css`
      border-color: ${props.error};
      border-bottom-width: 1px;
      border: 1px solid ${props.error};
      border-radius: 4px;
    `}
`;

export const TextInput = styled.Text<IStyleTextInput>`
  flex: 1;

  ${(props) =>
    props.theme.color &&
    css`
      color: ${props.theme.color};
    `}

  ${(props) =>
    props.theme.size &&
    css`
      font-size: ${props.theme.size}px;
    `}
`;

export const TextPlaceHolder = styled.Text`
  flex: 1;
  color: #999;
`;
