import { ReactNode } from "react";

export interface FormProps{
  open: boolean;
  handleClose: () => void;
};

export interface CarLogos {
  [key: string]: any;
};

export interface BlockProps {
  children: ReactNode;
}

export interface StoreProviderProps {
  children: ReactNode;
}

export interface CarDetailsSliceInitProp {
  id: string;
  location: string;
  bodyType: string;
  brand: string;
  owner: string;
  budget: string;
  fuelType: string;
  transmission: string;
}[];

