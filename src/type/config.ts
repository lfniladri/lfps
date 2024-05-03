import { CretedOrUpdated } from "./creationUptaion";

export interface Standard extends CretedOrUpdated {
  StandardName: string;
  isDeleted: boolean;
  order: number
}
