import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Fragment } from "react";
import BoyIcon from "@mui/icons-material/Boy";
import { MuiTelInput } from "mui-tel-input";
import GirlIcon from "@mui/icons-material/Girl";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import PortraitIcon from "@mui/icons-material/Portrait";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FamilyInformation() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  return (
    <Fragment>
      <Box sx={{ display: "flex", mb: 2 }}>
        <BoyIcon color="primary" />
        <Typography variant="body1" color={"primary"}>
          Father Info
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-firstname"
              label="First Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-middlename"
              label="Middle Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="E-Mail"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Educational Qualification" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Profession" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Designation" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <MuiTelInput />
          </FormControl>
        </Grid>
       
       
      </Grid>

      <Box sx={{ display: "flex", mt: 5, mb: 2 }}>
        <GirlIcon color="primary" />
        <Typography variant="body1" color={"primary"}>
          Mother Info
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-firstname"
              label="First Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-middlename"
              label="Middle Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="E-Mail"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Educational Qualification" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Profession" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Designation" />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <MuiTelInput />
          </FormControl>
        </Grid>
        
      </Grid>

      <Box sx={{ display: "flex", mt: 5, mb: 2 }}>
        <EscalatorWarningIcon color="primary" />
        <Typography variant="body1" color={"primary"}>
          Guardian Info
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-firstname"
              label="First Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-middlename"
              label="Middle Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="Last Name"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField
              id="candidate-lastname"
              label="E-Mail"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Relation with candidate" />
              )}
            />
          </FormControl>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <MuiTelInput />
          </FormControl>
        </Grid>
      </Grid>
    </Fragment>
  );
}
