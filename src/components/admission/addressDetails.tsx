import { Autocomplete, FormControl, Grid, TextField } from "@mui/material";

const AddressDetails = () => {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <FormControl fullWidth>
          <TextField
            size="small"
            id="candidate-firstname"
            label="Address"
            variant="outlined"
            multiline
            rows={3}
          />
        </FormControl>
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <Autocomplete
          size="small"
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
      </Grid>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <FormControl fullWidth>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => <TextField {...params} label="State" />}
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
            renderInput={(params) => <TextField {...params} label="City" />}
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
            renderInput={(params) => <TextField {...params} label="PIN Code" />}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default AddressDetails;
