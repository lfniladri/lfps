import { CretedOrUpdated } from "./creationUptaion";

export interface Standard extends CretedOrUpdated {
  id?: string;
  name: string;
  description: string;
  isDeleted: boolean;
  order: number;
  isActive: boolean;
}


export interface PaymentMode extends CretedOrUpdated {
  id?: string;
  mode: string;
  description: string;
  isDeleted: boolean;
  order: number;
  isActive: boolean;
}




export interface PaymentForCategory extends CretedOrUpdated {
  id?: string;
  payFor: string;
  description: string;
  isDeleted: boolean;
  isActive: boolean;
}
