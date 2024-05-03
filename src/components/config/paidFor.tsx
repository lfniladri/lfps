"use client";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import useConfigSetup from "@/hooks/useConfigSetup";
import CloseIcon from "@mui/icons-material/Close";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const PaidFor = () => {
  const [standard, setStandard] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const ConfigSetupService = useConfigSetup();

  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => setOpen(true)}>
          Add Payment For <PaymentsIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <IconButton color="primary">
            <CreditScoreIcon />
          </IconButton>
          <Typography variant="h6" sx={{pt:.5}}>Individual Can Pay For</Typography>
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
              Add/Edit Student Payment For
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
            label="Payment For"
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

export default PaidFor;
