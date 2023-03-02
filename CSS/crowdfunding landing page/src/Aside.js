import Links from './Links';
import { useGlobalContext } from './Context';

const Aside = () => {
  const { isAsideOpen } = useGlobalContext();
  return (
    <>
      {isAsideOpen && (
        <aside className="aside-wrapper">
          <Links />
        </aside>
      )}
    </>
  );
};
export default Aside;
