import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
// import bg from "../../../public"
function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Your Dream Home, Our Passion</h1>
          <h1 className="title">खोजम होइ खोजम:घरजग्गा</h1>
          <p>
            MeroGhar is the best place to find your next perfect place to live.
            We have a wide range of properties for you to choose from.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>0+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>0</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>0+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
