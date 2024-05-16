import { FirebaseDocument } from "@/constants/DocumentNames";
import { getAllDocument } from "@/firebase/api/getData";
import { arrayListFlattern } from "./responseConverter.util";
import saveDocument from "@/firebase/api/saveData";
import { getUUID } from "@/util/idGenerator";
import { PaymentForCategory, PaymentMode } from "@/type/config";
import update from "@/firebase/api/updateData";


/*** 
 *  Custom Hooks
 */



const usePaymentSetup = () => {
  /***
   *     *********   Payment Mode Section  **********
   */

  const getAllPaymentMode = async (): Promise<any> => {
    const rawResponse = await getAllDocument(FirebaseDocument.PaymentMode);

    const response = await rawResponse;
    const finalResp = arrayListFlattern(response);
    return finalResp;
  };

  const savePaymentMode = async (data: PaymentMode): Promise<any> => {
    const rawResponse = await saveDocument(
      FirebaseDocument.PaymentMode,
      getUUID(),
      data
    );

    const response = await rawResponse;

    return response;
  };

  const updatePaymentMode = async (
    data: PaymentMode,
    documentId: string
  ): Promise<any> => {
    const rawResponse = await update(
      FirebaseDocument.PaymentMode,
      documentId,
      data
    );

    const response = await rawResponse;

    return response;
  };

  /***
   *     *********   Payment For Cateogories Section  **********
   */

  const getAllPaymentForCategory = async (): Promise<any> => {
    const rawResponse = await getAllDocument(
      FirebaseDocument.PaymentForCategory
    );

    const response = await rawResponse;
    const finalResp = arrayListFlattern(response);
    return finalResp;
  };

  const savePaymentForCategory = async (
    data: PaymentForCategory
  ): Promise<any> => {
    const rawResponse = await saveDocument(
      FirebaseDocument.PaymentForCategory,
      getUUID(),
      data
    );

    const response = await rawResponse;

    return response;
  };

  const updatePaymentForCategory = async (
    data: PaymentForCategory,
    documentId: string
  ): Promise<any> => {
    const rawResponse = await update(
      FirebaseDocument.PaymentForCategory,
      documentId,
      data
    );

    const response = await rawResponse;

    return response;
  };

  const PaymentSetupService = Object.freeze({
    getAllPaymentMode,
    savePaymentMode,
    updatePaymentMode,
    getAllPaymentForCategory,
    savePaymentForCategory,
    updatePaymentForCategory,
  });

  
  return PaymentSetupService;
};


export default usePaymentSetup;