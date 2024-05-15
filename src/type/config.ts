import { CretedOrUpdated } from "./creationUptaion";

export interface Standard extends CretedOrUpdated {
  name: string;
  description: string;
  isDeleted: boolean;
  order: number;
}
