import logoDH from "../assets/images/astro.png";
import ContentWrapper from './ContentWrapper';
import ContentRowUsers from "./ContentRowUsers";
import Error404 from "./404";
import { Link, Route, Routes } from "react-router-dom";

const SideBar = () => {
  return (
    <>
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-50" src={logoDH} alt="Digital House"></img>
        </div>
      </Link>

      <hr className="sidebar-divider my-0"></hr>

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Astropizza</span>
        </Link>
      </li>

      <hr className="sidebar-divider"></hr>

      <div className="sidebar-heading">Actions</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/users">
          <i className="fas fa-fw fa-folder"></i>
          <span>Users</span>
        </Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block"></hr>
    </ul>
    

    <Routes>
      <Route path='/' element={<ContentWrapper/>} />
      <Route path='/users' element={<ContentRowUsers/>} />
      <Route path="*" element={<Error404/>}/> 
    </Routes>
    </>
  );
};

export default SideBar;
