// Modules
import styled, { css } from 'styled-components/native';
import ModalSelector from 'react-native-modal-selector-searchable';

// Types
import { IFont } from '../../Types';

export const Container = styled.View`
  background-color: #bbb;
  width: 100%;
  display: flex;
  padding: 8px 0;
`;

export const TextLabel = styled.Text<{theme: IFont}>`
  color: #000;

  ${props => (props.theme.color) &&
		css`
			color: ${props.theme.color};
		`}

  ${props => (props.theme.size) &&
		css`
			font-size: ${props.theme.size};
		`}
    
  ${props => (props.theme.family) &&
		css`
			font-family: ${props.theme.family};
		`}

  ${props => (props.theme.weight) &&
		css`
			font-weight: ${props.theme.weight};
		`}

`;
export const TextError = styled.Text<{theme: IFont}>`
  color: #c80000;
  margin: 0 8px;
 
  ${props => (props.theme.color) &&
		css`
			color: ${props.theme.color};
		`}

  ${props => (props.theme.size) &&
		css`
			font-size: ${props.theme.size};
		`}
    
  ${props => (props.theme.family) &&
		css`
			font-family: ${props.theme.family};
		`}

  ${props => (props.theme.weight) &&
		css`
			font-weight: ${props.theme.weight};
		`}

`;

export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  margin-left: 8px ;
  padding: 0 8px ;
  border-radius: 4px;
  height: 40px;
`;

export const PreTextInput = styled.TextInput`
  color: black;
`;
export const TextInput = styled.TextInput`
  flex: 1;
`;

export const Selected = styled(ModalSelector)`
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
  align-items: center;
  justify-content: center;
`

export const Row = styled.View`
  flex-direction: row;
`

export const TextFlag = styled.Text`
  font-size: 24px;
  margin-right: 8px;
`

export const TextFlagName = styled.Text`
  font-size: 16px;
  margin-right: 8px;
`
