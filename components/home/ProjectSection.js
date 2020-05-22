import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import ContainerFluid from '../utils/ContainerFluid';
import Project from './Project';
import useViewportWidth from '../../hooks/useViewportWidth';

const bounce = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;
const ArrowIcon = styled(IoIosArrowDown)`
  font-size: 4rem;
  animation: ${bounce} 1000ms infinite alternate;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-row-gap: 4rem;
  padding: 0 1rem;

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Projects = () => {
  return (
    <ContainerFluid padding='0 0 5rem 0'>
      <IconContainer>
        <ArrowIcon />
      </IconContainer>
      <Grid id='projects'>
        <Project
          title='Movie Explorer'
          externalPage='https://movie-explorer.julianvazquez.me/'
          internalPage='/projects/movie-explorer'
          imageSmall={'/images/sm/movie-explorer-sm.jpg'}
          imageLarge={'/images/lg/movie-explorer-lg.jpg'}
        />
        <Project
          title='Pet Matcher'
          externalPage='https://pet-matcher.julianvazquez.me/'
          internalPage='/projects/pet-matcher'
          imageSmall={'/images/sm/pet-matcher-sm.png'}
          imageLarge={'/images/lg/pet-matcher-lg.jpg'}
        />
        <Project
          title='Life Tracker'
          externalPage='https://life-tracker.julianvazquez.me/'
          internalPage='/projects/life-tracker'
          imageSmall={'/images/sm/life-tracker-sm.jpg'}
          imageLarge={'/images/lg/life-tracker-lg.jpg'}
        />
        <Project
          title='Typing Test'
          externalPage='https://julianvazq.github.io/typing-speed-tester/'
          internalPage='/projects/typing-test'
          imageSmall={'/images/sm/js-typying-test-sm.jpg'}
          imageLarge={'/images/lg/js-typing-test-lg.jpg'}
        />
        <Project
          title='Exotic Pet Store'
          externalPage='https://julianvazq.github.io/exotic-pet-store/'
          internalPage='/projects/exotic-pet-store'
          imageSmall={'/images/sm/exotic-pet-store-sm.jpg'}
          imageLarge={'/images/lg/exotic-pet-store-lg.jpg'}
        />
        <Project
          title='PG Finder'
          externalPage='https://julianvazq.github.io/typing-speed-tester/'
          internalPage='/projects/typing-test'
          imageSmall={'/images/sm/pet-matcher-sm.png'}
          imageLarge={'/images/lg/pet-matcher-lg.jpg'}
        />
      </Grid>
    </ContainerFluid>
  );
};

export default Projects;
