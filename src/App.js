import "./App.css";
import ColorfulBorder from "./Components/ColorfulBorder";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Slider from "./Components/Slider";
import SuperOffers from "./Components/SuperOffers";

function App() {
  document.title = "Hepsiorada Clone  ";
  return (
    <div>
      <Header />
      <ColorfulBorder />
      <Menu />
      <main>
        <Slider />
        <SuperOffers />
      </main>
    </div>
  );
}

export default App;
