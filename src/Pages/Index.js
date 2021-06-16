import React from "react";
import {
  Header,
  ColorfulBorder,
  Menu,
  Slider,
  SuperOffers,
} from "../Components/index";

const Index = () => {
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
};

export default Index;
