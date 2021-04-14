import styled from "styled-components";
import { Background, Navbar } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Background />
    </Application>
  );
}

export default App;

const Application = styled.div``;
