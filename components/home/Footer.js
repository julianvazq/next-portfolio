import React from 'react';
import styled from 'styled-components';
import ContainerFluid from '../utils/ContainerFluid';
import { GrLinkedin, GrGithub, GrDocumentPdf } from 'react-icons/gr';
import { MdEmail, MdPictureAsPdf } from 'react-icons/md';

const StyledFooter = styled.footer`
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: hsl(227, 43%, 75%);
`;

const CTAText = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const ContactList = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1.5rem;
  font-size: 1.75rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <ContainerFluid background='hsl(227, 42%, 23%)'>
      <StyledFooter id='footer'>
        <FooterText>Think my skillset could help you?</FooterText>
        <CTAText>Let's get in touch.</CTAText>
        <ContactList>
          <div>
            <GrLinkedin />
          </div>
          <p>Linkedin</p>
          <div>
            <GrGithub />
          </div>
          <p>GitHub</p>
          <div>
            <MdEmail />
          </div>
          <p>Email</p>
          <div>
            <MdPictureAsPdf />
          </div>
          <p>Resume</p>
        </ContactList>
      </StyledFooter>
    </ContainerFluid>
  );
};

export default Footer;
