"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/components/admission/admissionAccordian";
import ViewAdmissionFilledForm from "../../../../components/admission/viewFormModal";
import PersonalDetails from "@/components/admission/personalDetails";
import AddressDetails from "@/components/admission/addressDetails";
import FamilyInformation from "@/components/admission/familyInfo";
import PortraitIcon from "@mui/icons-material/Portrait";
import VisuallyHiddenInput from "@/components/common/visuallyHiddenInput";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">
                    Standard
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={""}
                    label="Standard"
                    size="small"
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
            <Typography>Residential Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddressDetails />
          </AccordionDetails>
        </Accordion>

        {/* Candidates's Parent Information */}
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Family Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FamilyInformation />
          </AccordionDetails>
        </Accordion>

        {/* Emergency Contact Details */}

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Emergency Contact</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        {/* Sibling inforamtion */}

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Admission Seeking In</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        {/* Reference Details */}

        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Reference Details</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>

        {/* Declaration */}

        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
          sx={{ borderRadius: 1 }}
        >
          <AccordionSummary>
            <Typography>Declaration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I/We confirm that all the information provided by me/us is
                correct. I / We further agree to inform the school promptly, in
                writing, of any subsequent changes. I / We agree to meet
                financial responsibilities promptly. I / We understand that any
                incorrect information given by me/us will render this
                application invalid and, consequently, the admission granted
                will be cancelled."
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt:5 }}>
              <FormControl fullWidth size="small">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      sx={{ flex: 1 }}
                      label="Date"
                      defaultValue={dayjs("2022-04-17")}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
              <FormControl fullWidth size="small"></FormControl>
            </Box>
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
