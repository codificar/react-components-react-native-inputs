import { IFont } from '../../Types';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  background-color: #bbb;
  width: 100%;
  display: flex;
  /* flex: 1; */
  padding: 16px;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const TextLabel = styled.Text<{theme: IFont}>`
  /* flex: 1; */
  /* display: flex; */
  /* background-color: #fff;
  margin: 4px 0;
  height: 40px;
  width: 100%; */
  /* min-height: 50px; */

  ${props => (props.theme.color) &&
		css`
			color: ${props.theme.color};
		`}

  ${props => (props.theme.size) &&
		css`
			font-size: ${props.theme.size};
		`}

`;
export const TextError = styled.Text<{theme: IFont}>`
  /* flex: 1; */
  /* display: flex; */
  /* background-color: #fff;
  margin: 4px 0;
  height: 40px;
  width: 100%; */
  /* min-height: 50px; */
  margin: 0 8px;
 
  ${props => (props.theme.color) &&
		css`
			color: ${props.theme.color};
		`}

  ${props => (props.theme.size) &&
		css`
			font-size: ${props.theme.size};
		`}

`;

export const TextInput = styled.TextInput`
  /* flex: 1; */
  /* display: flex; */
  background-color: #fff;
  margin: 4px 0;
  height: 40px;
  width: 100%;
  /* min-height: 50px; */
`;
