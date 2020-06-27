import React from "react";
import "./styles.css";

function* myGen() {
  yield 1;
  yield 2;
}

const testGenerator = () => {
  const gen = myGen();
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={testGenerator}>Test generators</button>
    </div>
  );
}
