import { useGlobalContext } from './Context';

const Product = () => {
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
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Marketplace</a>
      </li>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Integrations</a>
      </li>
    </ul>
  );
};
export default Product;
