import { useGlobalContext } from './Context';

const Company = () => {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <ul
      className={`${
        isSubmenuOpen
          ? 'aside-links-wrapper submenu-links'
          : 'aside-links-wrapper'
      }`}
    >
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
    </ul>
  );
};
export default Company;
