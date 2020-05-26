import styled from 'styled-components';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';
import ContainerFluid from '../utils/ContainerFluid';
import Link from 'next/link';

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
    <ContainerMaxWidth nav>
      <Nav>
        <img src='/logo/jv_logo.png' />
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#footer'>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <a>Resume</a>
          </li>
        </ul>
      </Nav>
    </ContainerMaxWidth>
  );
};

export default Navbar;
