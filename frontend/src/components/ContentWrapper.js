import ContentRowProductsList from "./ContentRowProductsList";
import NewSideBar from "./NewSideBar";
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";


const ContentWrapper = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="main-container">
          <NewSideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/products" element={<ContentRowProductsList/>}/>
            </Routes>
          </div>
        </div>
    </div>
    </>
  );
};

export default ContentWrapper;
