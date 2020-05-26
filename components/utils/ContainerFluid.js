import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.background && props.background};
  padding: ${(props) => props.padding && props.padding};
  padding: ${(props) => (props.nav ? '0' : '4rem 0')};
`;

const ContainerFluid = ({ background, padding, nav, children }) => {
  return (
    <Container
      background={background}
      padding={padding}
      nav={nav}
      style={{
        background:
          nav &&
          'linear-gradient(linear-gradient(180deg,rgba(0, 2, 108, 0.3) 0%, rgba(0, 2, 108, 0.3) 60%, rgba(11, 14, 24, 1) 100%), url(/images/space-background.jpg)',
        padding: nav && '1rem',
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerFluid;
