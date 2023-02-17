import { useEffect } from 'react';
import Company from './Company';
import Connect from './Connect';
import { useGlobalContext } from './Context';
import Product from './Product';

const Submenu = () => {
  const { submenuTarget, location } = useGlobalContext();
  let product = false;
  if (submenuTarget == 'product') {
    product = true;
  }

  let company = false;
  if (submenuTarget == 'company') {
    company = true;
  }

  let connect = false;
  if (submenuTarget == 'connect') {
    connect = true;
  }

  useEffect(() => {
    const submenu = document.querySelector('.submenu-wrapper');
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [submenuTarget]);

  return (
    <section className="submenu-wrapper">
      {product && <Product />}
      {company && <Company />}
      {connect && <Connect />}
    </section>
  );
};
export default Submenu;
