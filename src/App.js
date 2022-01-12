import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Newplaces from "./places/pages/NewPlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Users from "./user/pages/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/places/new" element={<Newplaces />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
