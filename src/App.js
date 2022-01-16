import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Newplaces from "./places/pages/NewPlace";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/place" element={<UserPlaces />} />
            <Route path="/places/new" element={<Newplaces />} />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
