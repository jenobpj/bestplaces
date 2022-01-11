import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-naviagation__title">
        <Link to="/"> Your Places </Link>
      </h1>
    </MainHeader>
  );
};
