// Modules
import styled, { css } from 'styled-components/native';
import ModalSelector from 'react-native-modal-selector-searchable';

// Types
import { IFont } from '../../Types';

export const Container = styled.View`
  width: 100%;
  display: flex;
  padding: 8px 0;
`;

export const TextLabel = styled.Text<{focus?: string, theme: IFont}>`
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
  margin: 2px 8px;
 

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

export const ContainerInput = styled.View<{disable?: string, focus?: string}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  margin-left: 8px ;
  padding: 0 8px ;
  border-radius: 4px;
  height: 40px;

  ${props => (props.focus) &&
		css`
			border-color: ${props.focus};
		`}

  ${props => (props.disable) &&
		css`
			background-color: ${props.disable};
		`}
`;

export const PreTextInput = styled.TextInput<{theme: IFont}>`
  color: black;

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

export const TextInput = styled.TextInput<{theme: IFont}>`
  flex: 1;

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

export const Selected = styled(ModalSelector)<{disable?: string, focus?: string}>`
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
