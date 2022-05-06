import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  letter-spacing: 0.5px;
  outline: none;
  padding: 1rem 3rem;
  border-radius: 3px;
  font-weight: bold;
  transition: all 0.4s;

  ${({ theme }) => `
    font-family: ${theme.global.fontFamily};
    font-size: ${theme.text.fontSize.body};
    border: 1px solid transparent;
    background-color: ${theme.text.color.default};
    color: #fff;

    &:hover {
        color: ${theme.text.color.default};
        border: 1px solid ${theme.text.color.default};
        background-color: #fff;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
  `};
`;
