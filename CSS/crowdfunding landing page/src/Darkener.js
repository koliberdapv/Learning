import { useGlobalContext } from './Context';

const Darkener = () => {
  const { isDarkenerOpen, handleClickDarkener } = useGlobalContext();
  return (
    <>
      {isDarkenerOpen && (
        <div className="darkener" onClick={handleClickDarkener}></div>
      )}
    </>
  );
};
export default Darkener;
