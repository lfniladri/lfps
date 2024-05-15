import { CretedOrUpdated } from "./creationUptaion";

export interface Standard extends CretedOrUpdated {
  id?: string;
  name: string;
  description: string;
  isDeleted: boolean;
  order: number;
  isActive: boolean;
}
