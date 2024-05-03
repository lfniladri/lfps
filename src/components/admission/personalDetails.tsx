import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const PersonalDetails = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <TextField
            id="candidate-firstname"
            label="First Name"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <TextField
            id="candidate-middlename"
            label="Middle Name"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <TextField
            id="candidate-lastname"
            label="Last Name"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]} >
              <DatePicker sx={{flex:1}}
                label="Date Of Birth"
                defaultValue={dayjs("2022-04-17")}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="demo-simple-select"
            label="Gender"
          >
            <MenuItem value={""}>Select</MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <TextField
            id="place-of-birth"
            label="Place of birth"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="gender-select-label">First Language</InputLabel>
          <Select
            labelId="gender-select-label"
            id="demo-simple-select"
            label="Gender"
          >
            <MenuItem value={""}>Select</MenuItem>
            <MenuItem value={"odia"}>Odia</MenuItem>
            <MenuItem value={"hindi"}>hindi</MenuItem>
            <MenuItem value={"english"}>english</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="gender-select-label">Other Language Known</InputLabel>
          <Select
            labelId="gender-select-label"
            id="demo-simple-select"
            label="Gender"
          >
            <MenuItem value={""}>Select</MenuItem>
            <MenuItem value={""}>Select</MenuItem>
            <MenuItem value={"odia"}>Odia</MenuItem>
            <MenuItem value={"hindi"}>hindi</MenuItem>
            <MenuItem value={"english"}>english</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
