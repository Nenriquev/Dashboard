import ContentRowProducts from "./ContentRowProducts";
import ContentRowUsers from "./ContentRowUsers";
import "../assets/css/app.css";

const HomePage = () => {
  return (
  <div className="topRow">
    <ContentRowUsers/>
    <ContentRowProducts/>
  </div>);
};

export default HomePage;
