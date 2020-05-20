import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import ContainerFluid from '../utils/ContainerFluid';

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

const Projects = () => {
  return (
    <ContainerFluid>
      <IconContainer>
        <ArrowIcon />
      </IconContainer>
    </ContainerFluid>
  );
};

export default Projects;
