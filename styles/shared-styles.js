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

/* Pages styling */

export const CoverImg = styled.img`
  display: block;
  width: 100%;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 1400px;
`;

export const Video = styled.video`
  margin: 1rem auto;
  display: block;
  width: 80%;
  max-height: 700px;

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;

  div:first-child {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

    div:first-child {
      width: 60%;
      margin-bottom: 4rem;
    }

    div:nth-child(2) {
      width: 25%;
    }
  }
`;
