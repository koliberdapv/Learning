import { useGlobalContext } from './Context';

const Connect = () => {
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
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Newsletter</a>
      </li>
      <li>
        <a href="#">LinkedIn</a>
      </li>
    </ul>
  );
};
export default Connect;
