import React from 'react';
import Navbar from '../shared/Navbar';
import styled from 'styled-components';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: center;
  padding: 1rem;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;

  video {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 2, 108, 0.3) 0%,
      rgba(0, 2, 108, 0.3) 60%,
      rgba(11, 14, 24, 1) 100%
    );
  }
`;

const ContentContainer = styled.div`
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Nav */
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Hero text */
  div:nth-child(2) {
    justify-content: center;
    align-items: center;
  }

  /* Name | position */
  div:nth-child(3) {
    justify-content: flex-end;
    margin-bottom: 2rem;
    flex-direction: column;
  }

  @media screen and (min-width: 450px) {
    div:nth-child(3) {
      align-items: flex-end;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const HeroText = styled.h1`
  font-size: 2rem;

  @media screen and (min-width: 500px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 700px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 1100px) {
    font-size: 3.5rem;
    max-width: 75%;
  }
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;

  @media screen and (min-width: 450px) {
    margin: 0;
  }

  @media screen and (min-width: 700px) {
    font-size: 1.75rem;
  }
`;

const Position = styled.p`
  font-size: 1.25rem;
  font-weight: 500;

  @media screen and (min-width: 700px) {
    font-size: 1.75rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <VideoContainer>
        <video src='/videos/space-compressed.mp4' autoPlay muted loop />
      </VideoContainer>
      <ContentContainer>
        <Navbar />
        <ContainerMaxWidth>
          <HeroText>I build aesthetically pleasing solutions.</HeroText>
        </ContainerMaxWidth>
        <ContainerMaxWidth>
          <Name>Julian Vazquez</Name>
          <Position>Front End Developer</Position>
        </ContainerMaxWidth>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
