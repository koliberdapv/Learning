const Aside = ({ isAsideOpen }) => {
  return (
    <>
      {isAsideOpen && (
        <aside className="aside-wrapper">
          <a href="#">about</a>
          <a href="#">services</a>
          <a href="#">projects</a>
          <button type="button" className="nav-btn aside-btn">
            contact
          </button>
        </aside>
      )}
    </>
  );
};
export default Aside;
