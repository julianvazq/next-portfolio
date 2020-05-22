import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../../styles/shared-styles';
import Link from 'next/link';

const ProjectItem = styled.article`
  /* border: 1px solid #7b7b7b; */
  /* box-shadow: 0px 0px 15px 0px hsla(226, 37%, 57%, 0.5); */

  img {
    display: block;
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  padding: 0.75rem 0;
  letter-spacing: 1px;
  background: hsl(226, 40%, 15%);
  /* border-bottom: 1px solid #7b7b7b; */
`;

const ImageContainer = styled.div`
  min-height: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Project = ({
  title,
  imageSmall,
  imageLarge,
  internalPage,
  externalPage,
}) => {
  return (
    <ProjectItem>
      <Title>{title}</Title>
      <picture>
        <source srcSet={imageLarge} media='(min-width: 1100px)' />
        <source srcSet={imageSmall} media='(max-width: 1100px)' />
        <img srcSet={imageSmall} alt={title} />
      </picture>
      <ButtonContainer>
        <PrimaryButton href={externalPage} target='_blank'>
          Visit site
        </PrimaryButton>
        <Link href={internalPage} scroll={false}>
          <SecondaryButton>Learn more</SecondaryButton>
        </Link>
      </ButtonContainer>
    </ProjectItem>
  );
};

export default Project;
