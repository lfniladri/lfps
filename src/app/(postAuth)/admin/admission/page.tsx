"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/components/admission/admissionAccordian";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import ViewAdmissionFilledForm from "../../../../components/admission/viewFormModal";
import PersonalDetails from "@/components/admission/personalDetails";
import AddressAndFamilyInfo from "@/components/admission/address-familyinfo";

const AdmissionPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const openModal = () => {};

  return (
    <Box>
      <ViewAdmissionFilledForm />

      <Box>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Admission Seeking In</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Standard
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={""}
                    label="Standard"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* Candidate’s Personal Details: */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Personal Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PersonalDetails />
          </AccordionDetails>
        </Accordion>

        {/* Candidate’s Personal Details: */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Residential Address & Family information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddressAndFamilyInfo />
          </AccordionDetails>
        </Accordion>

        {/* <Accordion
          expanded={expanded === "panel311"}
          onChange={handleChange("panel311")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ backgroundColor: "#d4edda" }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <Typography>Candidate Personal Details:</Typography>
              <TaskAltIcon sx={{ color: "#155724" }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            sx={{ backgroundColor: "#f8d7da" }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
            >
              <Typography>Residential Address & Family information:</Typography>
              <CancelIcon sx={{ color: "#721c24" }} />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          disabled
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              In case of Emergency Call Order of Priority with 1st,2nd,3rd?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography></Typography>
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Box>
  );
};
export default AdmissionPage;
