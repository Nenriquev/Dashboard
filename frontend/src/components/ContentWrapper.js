import ContentRowProductsList from "./ContentRowProductsList";
import ContentRowUsers from "./ContentRowUsers"
import ContentRowProducts from "./ContentRowProducts"
import NewSideBar from "./NewSideBar";
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";


const ContentWrapper = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <div>
          <NewSideBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/users" element={<ContentRowUsers/>}/>
              <Route path="/products" element={<ContentRowProducts/>}/>
              <Route path="/list" element={<ContentRowProductsList/>}/>
            </Routes>
          </div>
        </div>
    </div>
    </>
  );
};

export default ContentWrapper;
