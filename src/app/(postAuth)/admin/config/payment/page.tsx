
import * as React from "react";
import { Box } from "@mui/material";
import PaymentMode from "@/components/config/paymentMode";
import PaidFor from "@/components/config/paidFor";

export default function PaymentInfoPage() {
  return (
    <Box>
      <PaymentMode />
      <PaidFor />
    </Box>
  );
}
