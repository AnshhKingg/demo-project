import { useAppDispatch } from "@/lib/redux/hooks";
import { addLocation, addOwners, addTransmission } from "@/lib/redux/slices/AttributesSlice";
import { addCarDetails } from "@/lib/redux/slices/CarDetailsSlice";
import styled from "@emotion/styled";
import { FormProps } from "../interfaces";
const useForm = (props: FormProps) => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    dispatch(addCarDetails(formJson));
    dispatch(addLocation(formJson.location));
    dispatch(addOwners(formJson.numberOfOwners))
    dispatch(addTransmission(formJson.transmission))
    props.handleClose();
  }
  return {
    VisuallyHiddenInput,
    handleSubmit
  }
}

export default useForm;