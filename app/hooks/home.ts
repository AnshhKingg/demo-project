import useMainContext from "./mainContext";
import useSecondPage from "./secondPage";

const useHome = () => {
  const {handleClickOpen, handleClose, open} = useMainContext();
  const {carDetails, locations, router} = useSecondPage();
  return {
    handleClickOpen,
    handleClose,
    open,
    carDetails,
    locations,
    router,
  }
}

export default useHome;