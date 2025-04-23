import "./App.css";
import Counter from "./Components/Counter";
import HandleHeading from "./Components/HandleHeading";
import InputDetection from "./Components/InputDetection";
import MouseEvents from "./Components/MouseEvents";
import ShowHideContent from "./Components/ShowHideContent";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <HandleHeading />
      <hr />
      <InputDetection />
      <hr />
      <MouseEvents />
      <hr />
      <ShowHideContent />
    </>
  );
}

export default App;
