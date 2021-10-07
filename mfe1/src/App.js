import React from "react";
import Button from "./Button";
import Title from "./Title";

function App() {
  return (
    <>
      <Button callback={x => console.log(x)} />
      <br />
      <Title />
    </>
  );
}

export default App;
