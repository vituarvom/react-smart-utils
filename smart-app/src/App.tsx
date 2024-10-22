import "./App.css";
import { Pick } from "./components/function/pick";
import UseCountDown from "./components/hooks/UseCountdown";
import UsePrevious from "./components/hooks/UsePrevious";

function App() {
  return (
    <>
      <UseCountDown />
      <UsePrevious/>
      <Pick />
    </>
  );
}

export default App;
