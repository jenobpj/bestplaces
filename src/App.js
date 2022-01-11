import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Newplaces from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<Newplaces />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
