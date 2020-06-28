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

const testGeneratorWithStar = () => {
  function* generatorWithStar() {
    yield* myGen();
    yield* [3, 4];
  }

  const testGen = generatorWithStar();
  console.log("1 - myGen.next();", testGen.next());
  console.log("2 - myGen.next();", testGen.next());
  console.log("3 - myGen.next();", testGen.next());
  console.log("4 - myGen.next();", testGen.next());
  console.log("5 - myGen.next();", testGen.next());
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={testGenerator}>Test generators</button>
      <button onClick={testGeneratorWithStar}>Test generator with star</button>
    </div>
  );
}
