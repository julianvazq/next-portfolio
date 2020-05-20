import styled from 'styled-components';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';
import ContainerFluid from '../utils/ContainerFluid';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  img {
    height: 120px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 1.25rem;
    font-weight: 600;
  }

  li {
    margin: 0 1rem;
  }

  @media only screen and (min-width: 600px) {
    ul {
      flex-direction: row;
    }
  }
`;

const Navbar = () => {
  return (
    // <ContainerFluid background='red'>
    <ContainerMaxWidth>
      <Nav>
        <img src='/logo/jv_logo.png' />
        <ul>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </Nav>
    </ContainerMaxWidth>
    // </ContainerFluid>
  );
};

export default Navbar;
