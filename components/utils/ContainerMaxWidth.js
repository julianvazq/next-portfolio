import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => (props.nav ? '1500px' : '900px')};
  width: 90%;
  margin: auto;
  background: ${(props) => props.background && props.background};
`;

const ContainerMaxWidth = ({ background, nav, children }) => {
  return (
    <Container background={background} nav={nav}>
      {children}
    </Container>
  );
};

export default ContainerMaxWidth;
