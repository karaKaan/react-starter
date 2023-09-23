import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
