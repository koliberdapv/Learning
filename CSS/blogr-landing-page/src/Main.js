import editor_mobile from './images/illustration-editor-mobile.svg';
import editor_desktop from './images/illustration-editor-desktop.svg';

const Main = () => {
  return (
    <main className="main-wrapper">
      <h2 className="main-title">Designed for the future</h2>
      <figure className="main-image">
        <img src={editor_mobile} alt="editor" className="editor-img-mobile" />
        <img src={editor_desktop} alt="editor" className="editor-img-desktop" />
      </figure>
      <section className="main-info">
        <article>
          <h2>Introducing an extensile editor</h2>
          <p>
            Blogr features an exceedingle intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </article>
        <article>
          <h2>Robust content management</h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </article>
      </section>
    </main>
  );
};
export default Main;
