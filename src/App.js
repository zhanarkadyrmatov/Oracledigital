import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Main from "./pages/Main";

import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
