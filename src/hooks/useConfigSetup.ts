import { FirebaseDocument } from "@/constants/DocumentNames";
import {getDoument,getAllDocument} from "@/firebase/api/getData";
import saveDocument from "@/firebase/api/saveData";
import { getUUID } from "@/util/idGenerator";

const useConfigSetup = () => {
  const getAllStandard = async (): Promise<any> => {
    const rawResponse = await getAllDocument(FirebaseDocument.Standard);

    const response = await rawResponse;
    
    return response;
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

  const ConfigSetupService = Object.freeze({
    getAllStandard,
    saveStandard,
  });

  return ConfigSetupService;
};

export default useConfigSetup;
