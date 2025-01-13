import "./App.css";
import Accordian from "./components/accordian/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";
import LoadMoreButton from "./components/load-more-buton/index.jsx"
import TreeView from "./components/tree-view/index.jsx"
import QrGenerator from "./components/qr-code-generator/index.jsx"
import LightDarkMode from "./components/light-dark-mode/index.jsx"
function App() {
  return (
    <div className="App">
      {/* Accordian */}
      <Accordian />
      <hr></hr>
      {/* Random Color */}
      <RandomColor />
      <hr></hr>
      {/* Star Rating */}
      <StarRating noOfStars={7} />
      {/* Image Slider */}
      <hr></hr>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <hr></hr>
      {/* Load More Data */}
      <LoadMoreButton />
      <hr></hr>
      {/* Tree View component/menu UI component / recursive navigation menu */}
      <TreeView />
      <hr></hr>
      {/* Qr Code Generator */}
      <QrGenerator />
      <hr></hr>
      {/* Light to Dark toggle */}
      <LightDarkMode />
    </div>
  );
}

export default App;
