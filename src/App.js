import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50vw;
  gap: 10px;
`;
const Box = styled.div`
  height: 240px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Btn = styled.button`
  margin-top: 60px;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #1e3799;
  font-weight: bold;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Box />
          <Box />
          <Box />
          <Box />
        </Grid>
        <Btn>Switch</Btn>
      </Container>
    </Wrapper>
  );
}

export default App;
