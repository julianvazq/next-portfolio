import styled from 'styled-components';

const Container = styled.div`
  max-width: 1500px;
  width: 90%;
  margin: auto;
  background: ${(props) => props.background && props.background};
`;

const ContainerMaxWidth = ({ background, children }) => {
  return <Container background={background}>{children}</Container>;
};

export default ContainerMaxWidth;
