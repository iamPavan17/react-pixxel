import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3rem 1.8rem;
  border-bottom: 1px solid #ccc;

  .heading {
    margin-top: 1.6rem;
  }

  .heading:after {
    display: block;
    content: "";
    border-bottom: 1px solid #ccc;
    width: 26%;
    margin: 0 auto;
    padding-top: 0.6rem;
  }
`;

const Input = styled.input`
  letter-spacing: 0.2px;
  padding: 1.2rem;
  outline: none;
  transition: 0.4s;
  width: 100%;

  ${({ theme }) => `
    font-family: ${theme.global.fontFamily};
    font-size: ${theme.text.fontSize.body}rem;
  }
`}
`;

const Info = styled.div`
  ${({ theme }) => `
    border-left: 2px solid ${theme.text.color.caption};
    }`}

  padding: 1rem 0;
  padding-left: 1rem;
  margin: 1.6rem 0;
`;

const Details = styled.div`
  ${({ theme }) => `
    border: 1px solid ${theme.text.color.caption};
    }`}

  border-radius: 3px;
  padding: 2rem 1rem;
`;

export { Section, Input, Info, Details };
