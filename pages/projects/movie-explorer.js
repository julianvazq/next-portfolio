import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/shared/Navbar';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import ContainerFluid from '../../components/utils/ContainerFluid';
import {
  CoverImg,
  Img,
  Video,
  HeaderContainer,
  PrimaryButton,
  SecondaryButton,
} from '../../styles/shared-styles';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.25rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Navigation = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
`;

const NavigationLink = styled.p`
  font-size: 1.25rem;
`;

const VideoDescription = styled.p`
  font-size: 1.25rem;
`;

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: space-between;

  a {
    width: 100%;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

const MovieExplorerPage = () => {
  return (
    <>
      <ContainerFluid nav>
        <Navbar />
      </ContainerFluid>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <picture>
          <source
            srcSet={'/images/cover/movie-explorer-cover-lg.png'}
            media='(min-width: 1100px)'
          />
          <source
            srcSet={'/images/cover/movie-explorer-cover-sm.png'}
            media='(max-width: 1100px)'
          />
          <CoverImg
            srcSet={'/images/cover/movie-explorer-cover-lg.png'}
            alt={'Movie Explorer'}
          />
        </picture>
        <ContainerFluid>
          <ContainerMaxWidth>
            <Title>Movie Explorer</Title>
            <HeaderContainer>
              <div>
                <Description>
                  Discover thousands of movies and add them to your watchlist.
                </Description>
                <ButtonContainer>
                  <PrimaryButton>Visit site</PrimaryButton>
                  <SecondaryButton>View code</SecondaryButton>
                </ButtonContainer>
              </div>
              <div>
                <Navigation>Content</Navigation>
                <NavigationLink>
                  <Link href='/'>
                    <a>Home Page</a>
                  </Link>
                </NavigationLink>
                <NavigationLink>
                  {' '}
                  <a href='#responsive'>Responsive Design</a>
                </NavigationLink>
                <NavigationLink>
                  {' '}
                  <a href='#tech'>Tech Stack</a>
                </NavigationLink>
              </div>
            </HeaderContainer>
          </ContainerMaxWidth>
        </ContainerFluid>
        <ContainerFluid background='hsl(227,42%,23%)'>
          <ContainerMaxWidth>
            <Subtitle>Preview</Subtitle>
            <VideoDescription>Browse similar movies</VideoDescription>
          </ContainerMaxWidth>
          <Video autoPlay loop muted playsInline>
            <source src='/videos/movie-explorer-browse.mp4' type='video/mp4' />
          </Video>
          <ContainerMaxWidth>
            <VideoDescription>Add movies to your watchlist</VideoDescription>
          </ContainerMaxWidth>
          <Video autoPlay loop muted playsInline>
            <source
              src='/videos/movie-explorer-watchlist.mp4'
              type='video/mp4'
            />
          </Video>
        </ContainerFluid>
        <ContainerFluid>
          <ContainerMaxWidth></ContainerMaxWidth>
        </ContainerFluid>
      </motion.div>
    </>
  );
};

export default MovieExplorerPage;
