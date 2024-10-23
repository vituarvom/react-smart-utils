import "./App.css";
import UseCountDown from "./components/hooks/UseCountDown";
import { UseUnmount } from "./components/hooks/UseUnmount";

function App() {
  return (
    <>
      <UseCountDown />
      <UseUnmount />
    </>
  );
}

export default App;
