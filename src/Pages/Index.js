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
    <>
      <Header />
      <ColorfulBorder />
      <Menu />
      <main>
        <Slider />
        <SuperOffers />
      </main>
    </>
  );
};

export default Index;
