"use client";

import { VerticalBarChart } from "@/components/common/chart/verticalBarChart.ui";
import RoleCountCard from "@/components/dashboard/roleCardCount";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function DashboardPage() {
  const data = [
    {
      legend: "Total",
      count: 12000,
      bgClr: "rgba(7,65,115,0.2)",
      clr: "rgb(7,65,115)",
    },
    {
      legend: "Paid",
      count: 7000,
      bgClr: "rgba(13,110,253,0.2)",
      clr: "rgb(13,110,253)",
    },
    {
      legend: "Due",
      count: 5000,
      bgClr: "rgba(220,53,69,0.2)",
      clr: "rgb(220,53,69)",
    },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Box
            sx={{
              backgroundColor: "#404297",
              color: "white",
              borderRadius: 1,
              p: 1,
            }}
          >
            <Typography>Welcome,</Typography>
            <Typography
              variant="caption"
              sx={{ mt: 0.5, mb: 1, display: "block" }}
            >
              Your dashboard is the control center for empowering education.
              From here, you can monitor student payment, and fine-tune the
              learning experience. Stay informed with real-time analytics,
              streamline administrative tasks with intuitive tools, and foster
              collaboration among instructors and students. Your dedication
              shapes the future of learning. Let's make every interaction
              count."
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
            Amount (FY 2024-25)
          </Typography>
          <Box display="flex" gap={2}>
            {data.map((item) => (
              <RoleCountCard
                key={item.legend + "__"}
                legend={item.legend}
                count={item.count}
                avatarBgClr={item.bgClr}
                clr={item.clr}
              />
            ))}
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>Payment</Typography>
                </Box>
                <Box>
                  <ButtonGroup size="small" aria-label="Small button group">
                    <Button>3M</Button>
                    <Button variant="contained">6M</Button>
                    <Button>1Y</Button>
                  </ButtonGroup>
                </Box>
              </Box>
              <Box>
                <VerticalBarChart legendPosition="bottom" title={undefined} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
