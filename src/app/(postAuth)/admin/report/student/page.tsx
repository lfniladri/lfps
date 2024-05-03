"use client";
import StudentCard from "@/components/report/studentCard.ui";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useState } from "react";

const StudentReportPage = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, mt: 2}}
      >
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <InputLabel id="standard-label-label">Standard</InputLabel>
            <Select
              labelId="standard-label-label"
              id="standard-label"
              label="Standard"
              size="small"
            >
              <MenuItem value={0}>LKG</MenuItem>
              <MenuItem value={1}>UKG</MenuItem>
              <MenuItem value={2}>First</MenuItem>
              <MenuItem value={3}>Second</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <FormControl fullWidth>
            <TextField label="Search by name" size="small" />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13].map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <StudentCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default StudentReportPage;
