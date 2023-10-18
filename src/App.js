import { Routes, Route } from "react-router-dom";

import DesignHeader from "../src/components/DesignerHeader/header";
import Home from "./pages/Home";
import "../src/assets/scss/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DesignHeader />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
