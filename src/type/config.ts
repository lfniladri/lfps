import { CretedOrUpdated } from "./creationUptaion";

export interface Standard extends CretedOrUpdated {
  StandardName: string;
  isDleted: boolean;
  order: number
}
