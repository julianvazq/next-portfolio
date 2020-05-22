import styled from 'styled-components';

const Container = styled.div`
  background: ${(props) => props.background && props.background};
  padding: ${(props) => props.padding && props.padding};
`;

const ContainerFluid = ({ background, padding, children }) => {
  return (
    <Container background={background} padding={padding}>
      {children}
    </Container>
  );
};

export default ContainerFluid;
