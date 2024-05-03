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
  Stack,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function DashboardPage() {
  const data = [
    {
      legend: "Desired",
      count: 100,
      bgClr: "rgba(7,65,115,0.2)",
      clr: "rgb(7,65,115)"
    },
    {
      legend: "Total",
      count: 25,
      bgClr: "rgba(13,110,253,0.2)",
      clr: 'rgb(13,110,253)'
    },
    {
      legend: "Available",
      count: 10,
      bgClr: "rgba(13,202,240,0.2)",
      clr: "rgb(13,202,240)",
    },
    {
      legend: "Gap",
      count: 65,
      bgClr: "rgba(220,53,69,0.2)",
      clr: "rgb(220,53,69)",
    },
  ];

  return (
    <Fragment>
      
      
      <Box sx={{ p: 5, backgroundColor: "#f1f5f9" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                backgroundColor: "#404297",
                color: "white",
                borderRadius: 1,
                p: 2,
              }}
            >
              <Typography>
                Welcome
                <b>
                  <i> Freddie Marshal</i>
                </b>
                ,
              </Typography>
              <Typography
                variant="caption"
                sx={{ mt: 0.5, mb: 1, display: "block" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. simply dummy text of the printing and
                typesetting industry. simply dummy text of the printing and
                typesetting industry. 
              </Typography>

              <Button variant="contained" size="small" href="/job-roles">
                View Job Role 
              </Button>
            </Box>
            <Typography sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
              Ongoing Month People Count
            </Typography>
            <Box display="flex" gap={2}>
              {data.map((item) => (
                <RoleCountCard key={item.legend+"__"} legend={item.legend} count={item.count} avatarBgClr={item.bgClr} clr={item.clr} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>
                      People Count
                    </Typography>
                  </Box>
                  <Box>
                    <ButtonGroup size="small" aria-label="Small button group">
                      <Button>3M</Button>
                      <Button variant="contained">6M</Button>
                      <Button>1Y</Button>
                      <Button>Q1</Button>
                      <Button>Q2</Button>
                      <Button>Q3</Button>
                      <Button>Q4</Button>
                    </ButtonGroup>
                  </Box>
                </Box>
                <VerticalBarChart legendPosition="bottom" title={undefined} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}
