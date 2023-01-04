import ContentRowProducts from "./ContentRowProducts";
import ContentRowUsers from "./ContentRowUsers";
import "../assets/css/app.css";

const HomePage = () => {
  return (
    <div className="topRow">
      <div className="ContentRowProductsHome">
        <ContentRowProducts />
      </div>
      <div className="ContentRowUsersHome">
        <ContentRowUsers />
      </div>
    </div>
  );
};

export default HomePage;
