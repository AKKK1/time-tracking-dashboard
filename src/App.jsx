import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import TimeTracker from "./components/TimeTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <TimeTracker />
    </>
  );
}

export default App;
