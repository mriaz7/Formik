import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import "./App.css";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;