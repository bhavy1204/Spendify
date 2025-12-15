import { Routes, Route } from "react-router-dom";
import PageNotFOund from "./components/utils/PageNotFOund";
import Home from "./components/dashboard/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFOund/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
