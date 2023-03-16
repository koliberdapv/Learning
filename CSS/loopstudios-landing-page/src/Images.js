import earth from './images/mobile/image-deep-earth.jpg';
import earthDesktop from './images/desktop/image-deep-earth.jpg';
import arcade from './images/mobile/image-night-arcade.jpg';
import arcadeDeskop from './images/desktop/image-night-arcade.jpg';
import soccer from './images/mobile/image-soccer-team.jpg';
import soccerDesktop from './images/desktop/image-soccer-team.jpg';
import auto from './images/mobile/image-grid.jpg';
import autoDesktop from './images/desktop/image-grid.jpg';
import above from './images/mobile/image-from-above.jpg';
import aboveDesktop from './images/desktop/image-from-above.jpg';
import borealis from './images/mobile/image-pocket-borealis.jpg';
import borealisDesktop from './images/desktop/image-pocket-borealis.jpg';
import curiosity from './images/mobile/image-curiosity.jpg';
import curiosityDesktop from './images/desktop/image-curiosity.jpg';
import fisheye from './images/mobile/image-fisheye.jpg';
import fisheyeDesktop from './images/desktop/image-fisheye.jpg';

const Images = () => {
  return (
    <>
      <picture>
        <img src={earth} alt="earth" />
        <img src={earthDesktop} alt="earth" />
      </picture>
    </>
  );
};
export default Images;
