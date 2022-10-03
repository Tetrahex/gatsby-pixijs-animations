import React from "react";
import * as PIXI from "pixi.js";
import {
  Main,
  BGImage,
  BannerImage,
  SecondComponent,
  RedBanner,
  GreenBanner,
  BlueBanner,
} from "../home/style";
import NavBar from "../navbar/navbar";
import Banner from "../../images/banner.png";
import { Graphics } from "pixi.js";
import App from "../../pages";
import girl1 from "./images/Girl1.png";
import girl2 from "./images/Girl2.png";
import girl3 from "./images/Girl3.png";
import girl4 from "./images/Girl4.png";
// Three Js
import * as THREE from "three";

const FirstComponent = () => {
  const Application = PIXI.Application;

  const app = new Application({
    transparent: true,
  });

  document.getElementById("BGImage")?.appendChild(app.view);

  app.loader.load(setup);

  function setup() {
    let alienImages = [girl1, girl2, girl3, girl4];
    let textureArray = [];

    for (let i = 0; i < 4; i++) {
      let texture = PIXI.Texture.from(alienImages[i]);
      textureArray.push(texture);
    }

    let animatedSprite = new PIXI.AnimatedSprite(textureArray);
    animatedSprite.position.set(100, 50);
    animatedSprite.scale.set(1.5, 1.5);
    app.stage.addChild(animatedSprite);
    animatedSprite.play();
    animatedSprite.animationSpeed = 0.1;

    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;
      animatedSprite.x = 100.0 + Math.cos(elapsed / 50.0) * 10.0;
      animatedSprite.y = 100.0 + Math.cos(elapsed / 50.0) * 10.0;
    });
  }

  return (
    <Main>
      <NavBar />
      <BGImage id="BGImage">
        {/* <BannerImage src={Banner} alt="Banner"></BannerImage> */}
      </BGImage>

      {/* <SecondComponent>
        <RedBanner />
        <GreenBanner />
        <BlueBanner />
      </SecondComponent> */}
    </Main>
  );
};

export default FirstComponent;
