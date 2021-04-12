import styled from "styled-components";
import { Background } from "./components";

const App = () => {
  return (
    <Application>
      <Background />
    </Application>
  );
}

export default App;

const Application = styled.div`
  h1 {
    font-size: 120px;
  }
`;
