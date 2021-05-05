import styled from "styled-components";
import { Background, Home, Navbar, SocialLinks } from "./components";

const App = () => {
  return (
    <Application>
      <Navbar />
      <Background />
      <SocialLinks />
      <Home />
    </Application>
  );
}

export default App;

const Application = styled.div``;
