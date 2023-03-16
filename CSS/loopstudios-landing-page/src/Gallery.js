import Images from './Images';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__content | grid">
          <h2 className="gallery__content_title">our creations</h2>
          <article className="gallery__content_images | grid">
            <div
              className="gallery__content_images_single_image"
              data-image="earth"
            >
              <p>deep earth</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="arcade"
            >
              <p>night arcade</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="soccer"
            >
              <p>soccer team vr</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="grid"
            >
              <p>
                the <br />
                grid
              </p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="above"
            >
              <p>from up above vr</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="pocket"
            >
              <p>pocket borealis</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="curiosity"
            >
              <p>the curiosity</p>
            </div>
            <div
              className="gallery__content_images_single_image"
              data-image="fisheye"
            >
              <p>make it fisheye</p>
            </div>
          </article>
          <button type="button" className="gallery__conntent_btn">
            see all
          </button>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
