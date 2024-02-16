import logo from "./logo.svg";
import "./App.css";

function App() {
  let x = 10;

  function handleUpdate() {
    x = x + 5;
  }
  console.log("x: " + x);
  return (
    <>
      <h1>Learning state {x}</h1>
      <button onClick={handleUpdate}>Update </button>
    </>
  );
}

export default App;
