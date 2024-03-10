'use client'
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const useSecondPage = () => {
  const carDetails = useSelector((state: any) => state.CarDetailsReducer);
  const locations = useSelector((state: any) => state.AttributeReducer.locations);
  const router = useRouter();
  return {
    carDetails,
    locations,
    router
  }
}

export default useSecondPage;