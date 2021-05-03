import styled from "styled-components";
import { Background, Navbar, SocialLinks } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Background />
      <SocialLinks />
    </Application>
  );
}

export default App;

const Application = styled.div``;
