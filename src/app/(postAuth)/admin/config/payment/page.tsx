
import * as React from "react";
import { Box } from "@mui/material";
import PaymentModeComponent from "@/components/config/paymentMode";
import PaymentForCategoryComponent from "@/components/config/paidFor";

export default function PaymentInfoPage() {
  return (
    <Box>
      <PaymentModeComponent />
      <PaymentForCategoryComponent />
    </Box>
  );
}
