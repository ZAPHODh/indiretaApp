import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 40px;
  border-radius: 35px;
  overflow: hidden;
  position: relative;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
  width: 100%;
  height: 100%;
  border-radius: 35px 0 0 35px;
  border: solid 1px darkgray;
  padding-left:25px;
  padding-right:50px;
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  &:hover{
    border-color: ${theme.colors.onFocus};
  }
  &:focus{
    outline: none;
  }
  &::placeholder{
    font-weight: bold;
    opacity: 0.5;
  }
  `}
`;

export const Button = styled.button`
${({ theme }) => css`
  height: 100%;
  width: 80px;
  background-color: darkgray;
  border: none;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  &:hover{
    cursor: pointer;
  }
`}
`;
export const KeyboardIcon = styled.span`
  ${({ theme }) => css`
  border: none;
  background-color: transparent;
  position: absolute;
  z-index: 1;
  font-size: 25px;
  color:${theme.colors.mediumGray};
  right: 8rem;
  top:0.5rem;
  &:hover{
    cursor: pointer;
    color:${theme.colors.primaryColor}
  }
  `}
`;
export const KeyboardContainer = styled.div`
  position:absolute;
  border-radius: 5px;
  width: 500px ;
  z-index: 1;
`;
export const CloseKeyboard = styled.button`
${() => css`
  position: absolute;
  right: -2rem;
  top:-0.5rem;
  background-color:transparent ;
  border: none;
  font-size: 20px;
  :hover{
    cursor: pointer;
  }
`}
`;
