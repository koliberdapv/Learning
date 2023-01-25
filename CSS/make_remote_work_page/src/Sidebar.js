import Company from './Company';
import Features from './Features';
import close_btn from './images/icon-close-menu.svg';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    isSidebarOpen && (
      <aside className="sidebar">
        <button className="sidebar-btn" onClick={() => setIsSidebarOpen(false)}>
          <img src={close_btn} alt="close" />
        </button>
        <div className="links-wrapper">
          <Features />
          <Company />
          <a href="#">Careers</a>
          <a href="#">About</a>
        </div>
        <div className="buttons-wrapper">
          <button className="login-btn btn">Login</button>
          <button className="register-btn btn">Register</button>
        </div>
      </aside>
    )
  );
};

export default Sidebar;
