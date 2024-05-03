"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentIcon from "@mui/icons-material/Payment";
import { useState } from "react";
import useConfigSetup from "@/hooks/useConfigSetup";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CloseIcon from "@mui/icons-material/Close";

const PaymentMode = () => {
  const [standard, setStandard] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const ConfigSetupService = useConfigSetup();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => setOpen(true)}
        >
          Add Payment Modes{" "}
          <PaymentIcon sx={{ ml: 1 }}/>
        </Button>
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <IconButton color="primary">
            <CurrencyRupeeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ pt: 0.5 }}>
            Payment Modes
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ mt: 5, p: 3, width: "360px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography color="primary" component={Box} fontWeight={600}>
              Add/Edit Student Payment Mode
            </Typography>
            <IconButton
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Payment Mode"
            variant="outlined"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
          />

          <Box
            sx={{
              display: "flex",
              marginTop: `auto`,
              mt: 2,
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                setStandard("");
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={() => {}}>
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PaymentMode;
