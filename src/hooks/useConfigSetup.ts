import { FirebaseDocument } from "@/constants/DocumentNames";
import {getDoument,getAllDocument} from "@/firebase/api/getData";
import saveDocument from "@/firebase/api/saveData";
import { getUUID } from "@/util/idGenerator";
import { arrayListFlattern } from "./responseConverter.util";
import update from "@/firebase/api/updateData";

const useConfigSetup = () => {


  const getAllStandard = async (): Promise<any> => {
    const rawResponse = await getAllDocument(FirebaseDocument.Standard);

    const response = await rawResponse;
    const finalResp = arrayListFlattern(response)
    return finalResp;
  };

  const saveStandard = async (data: any): Promise<any> => {
    const rawResponse = await saveDocument(
      FirebaseDocument.Standard,
      getUUID(),
      data
    );

    const response = await rawResponse;

    return response;
  };


  const updateStandard = async (data: any, documentId:string): Promise<any> => {
    const rawResponse = await update(
      FirebaseDocument.Standard,
      documentId,
      data
    );

    const response = await rawResponse;

    return response;
  };

  

  


  const ConfigSetupService = Object.freeze({
    getAllStandard,
    saveStandard,
    updateStandard
  });

  return ConfigSetupService;
};

export default useConfigSetup;
