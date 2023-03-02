import { useGlobalContext } from './Context';

const Darkener = () => {
  const { isDarkenerOpen } = useGlobalContext();
  return <>{isDarkenerOpen && <div className="darkener"></div>}</>;
};
export default Darkener;
