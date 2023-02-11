import cone_mobile from './images/mobile/image-gallery-cone.jpg';
import cone_desktop from './images/desktop/image-gallery-cone.jpg';
import milk_mobile from './images/mobile/image-gallery-milkbottles.jpg';
import milk_desktop from './images/desktop/image-gallery-milkbottles.jpg';
import orange_mobile from './images/mobile/image-gallery-orange.jpg';
import orange_desktop from './images/desktop/image-gallery-orange.jpg';
import sugar_mobile from './images/mobile/image-gallery-sugar-cubes.jpg';
import sugar_desktop from './images/desktop/image-gallery-sugarcubes.jpg';

const Figure = () => {
  return (
    <figure className="figure-wrapper">
      <div className="figure-image-wrapper">
        <img src={milk_desktop} alt="milk bottles" className="desktop" />
        <img src={milk_mobile} alt="milk bottles" className="mobile" />
      </div>
      <div className="figure-image-wrapper">
        <img src={orange_desktop} alt="orange" className="desktop" />
        <img src={orange_mobile} alt="orange" className="mobile" />
      </div>
      <div className="figure-image-wrapper">
        <img src={cone_desktop} alt="cone" className="desktop" />
        <img src={cone_mobile} alt="cone" className="mobile" />
      </div>
      <div className="figure-image-wrapper">
        <img src={sugar_desktop} alt="sugar" className="desktop" />
        <img src={sugar_mobile} alt="sugar" className="mobile" />
      </div>
    </figure>
  );
};
export default Figure;
