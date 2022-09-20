import Appbar from "./components/Appbar";
import Upload from "./components/Upload";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(/collage.jpg)" }}>
      <Appbar />
      <Upload />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
