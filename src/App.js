import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

  div:first-child {
    transform-origin: 100% 100% !important;
  }
  div:last-child {
    transform-origin: 0% 0% !important;
  }
`;
const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
`;
const Btn = styled(motion.button)`
  margin-top: 60px;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: #7d5fff;
  font-weight: bold;
  cursor: pointer;
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  sizeUp: { scale: 1.1 },
};

function App() {
  const [id, setId] = useState(null);
  const [switchClicked, setSwitchClicked] = useState(false);
  const onClick = () => setSwitchClicked((prev) => !prev);

  return (
    <Wrapper>
      <Container>
        <Grid>
          <Box
            layoutId={1}
            onClick={() => setId(1)}
            variants={boxVariants}
            whileHover="sizeUp"
          />
          <Box>{!switchClicked ? <Circle layoutId="circle" /> : null}</Box>
          <Box>{switchClicked ? <Circle layoutId="circle" /> : null}</Box>
          <Box
            layoutId={2}
            onClick={() => setId(2)}
            variants={boxVariants}
            whileHover="sizeUp"
          />
        </Grid>
        <Btn whileTap={{ scale: 1.2, color: "#ffb8b8" }} onClick={onClick}>
          Switch
        </Btn>
      </Container>

      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={id}
              style={{ width: 400, height: 240, background: "#fff3cb" }}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
