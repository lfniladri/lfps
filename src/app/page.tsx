"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export default function Page() {
  return (
    <Grid container sx={{ height: "100%" }} spacing={2}>
      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: "#1976d2",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <AccountBalanceIcon sx={{ color: "white", fontSize: "100px" }} />
          <Typography
            sx={{ color: "white", textTransform: "italic", fontSize: "16px" }}
          >
            Little Flower Public Shools
          </Typography>
        </Box>
      </Grid>
      <Grid item  xs={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography color="primary" variant="body2">
              Ready to embark on your educational journey?
            </Typography>
            <Typography color="primary" variant="body2" sx={{ mb: 3 }}>
              Click below to access your account and unlock the full potential
              of our platform.
            </Typography>

            <Button variant="contained" href="/signin">
              Log in
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
