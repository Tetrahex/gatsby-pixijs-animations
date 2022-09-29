import React from "react";
import { Main, BGImage } from "../Home/Style";
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";
// import bird from "../../images/bird.png";
// import data from "../../assets/dragon.json";

const Home = () => {
  const app = new PIXI.Application();
  document.body.appendChild(app.view);

  app.loader
    .add("dragon", "../../assets/dragon.json")
    .load(function (loader: any, resources: any) {
      console.log("resources.dragon", resources.dragon);

      const animation = new Spine(resources.dragon.spineData);

      // animation.skeleton.setToSetupPose();
      // animation.update(0);
      // animation.autoUpdate = false;

      // add the animation to the scene and render...
      // app.stage.addChild(animation);

      // if (animation.state.hasAnimation("run")) {
      //   // run forever, little boy!
      //   animation.state.setAnimation(0, "run", true);
      //   // dont run too fast
      //   animation.state.timeScale = 0.1;
      // }

      app.start();
    });

  // 2nd

  // const app = new PIXI.Application();
  // document.body.appendChild(app.view);

  // app.stop();

  // // load spine data
  // app.loader.add("dragon", "../../assets/dragon.json").load(onAssetsLoaded);

  // let dragon: any = null;

  // function onAssetsLoaded(loader: any, res: any) {
  //   // instantiate the spine animation
  //   dragon = new Spine(res.dragon.spineData);
  //   // dragon = new PIXI.spine.Spine(res.dragon.spineData);
  //   dragon.skeleton.setToSetupPose();
  //   dragon.update(0);
  //   dragon.autoUpdate = false;

  //   // create a container for the spine animation and add the animation to it
  //   const dragonCage = new PIXI.Container();
  //   dragonCage.addChild(dragon);

  //   // measure the spine animation and position it inside its container to align it to the origin
  //   const localRect = dragon.getLocalBounds();
  //   dragon.position.set(-localRect.x, -localRect.y);

  //   // now we can scale, position and rotate the container as any other display object
  //   const scale = Math.min(
  //     (app.screen.width * 0.7) / dragonCage.width,
  //     (app.screen.height * 0.7) / dragonCage.height
  //   );
  //   dragonCage.scale.set(scale, scale);
  //   dragonCage.position.set(
  //     (app.screen.width - dragonCage.width) * 0.5,
  //     (app.screen.height - dragonCage.height) * 0.5
  //   );

  //   // add the container to the stage
  //   app.stage.addChild(dragonCage);

  //   // once position and scaled, set the animation to play
  //   dragon.state.setAnimation(0, "flying", true);

  //   app.start();
  // }

  // app.ticker.add(() => {
  //   // update the spine animation, only needed if dragon.autoupdate is set to false
  //   dragon.update(0.01666666666667); // HARDCODED FRAMERATE!
  // });

  // 1st

  // let app = new PIXI.Application({
  //   width: 600,
  //   height: 360,
  //   transparent: true,
  // });

  // document.body.appendChild(app.view);

  // let sprite = PIXI.Sprite.from(bird);

  // app.stage.addChild(sprite);

  // let elapsed = 0.0;

  // app.ticker.add((delta) => {
  //   elapsed += delta;
  //   sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
  // });

  return (
    <Main>
      <BGImage id="one"></BGImage>
    </Main>
  );
};

export default Home;
