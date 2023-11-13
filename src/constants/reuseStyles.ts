import { css } from 'styled-components';

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const centerByFlex = css`
  ${flexAlignCenter}
  justify-content: center;
`;
export const centerByFlexColumn = css`
  ${flexAlignCenter}
  flex-direction: column;
`;

export const cellParams = css`
  height: 30px;
  font-size: 15px;
  cursor: pointer;
`;
