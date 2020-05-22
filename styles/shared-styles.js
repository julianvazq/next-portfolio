import styled from 'styled-components';

export const PrimaryButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: hsl(216, 100%, 65%);
  color: hsl(216, 100%, 20%);
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 50%;
  text-align: center;
  font-weight: 700;
  /* border-radius: ${(props) => props.theme.borderRadius}; */
  cursor: pointer;

  @media screen and (min-width: 550px) {
    padding: 0.75rem 1.25rem;
  }

  @media screen and (max-width: 330px) {
      font-size: 0.9rem;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: hsl(216, 20%, 70%);
  color: hsl(216, 100%, 10%);
  font-weight: 500;
`;
