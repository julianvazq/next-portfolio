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
            <HeaderContainer>
              <div>
                <Title>Movie Explorer</Title>
                <Description>
                  Discover thousands of movies and add them to your watchlist.
                </Description>
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
      </motion.div>
    </>
  );
};

export default MovieExplorerPage;
