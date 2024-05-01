import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementsAtEvent } from "react-chartjs-2";
import { RoleDataBasedOnMonth } from "./data";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StackedBarChart() {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState<any>();
  const chartRef = useRef<any>();

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Role analysis With Stacked Bar Chart",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = RoleDataBasedOnMonth.label;
  const desired = RoleDataBasedOnMonth.desired;
  const total = RoleDataBasedOnMonth.total;
  const recommended = RoleDataBasedOnMonth.recommended;

  const data = {
    labels,
    datasets: [
      {
        label: "Desired",
        data: desired,
        backgroundColor: "rgb(117, 164, 127)",
      },
      {
        label: "Total",
        data: total,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Recommended",
        data: recommended,
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current;

    console.log("[stackedBarChart]: ", chart);
  }, []);

  const onClick = (event: any) => {
    console.log(getElementsAtEvent(chartRef.current, event));

    let val = getElementsAtEvent(chartRef.current, event);
  
    if(val.length>0){
      setIndex(val[0]?.index);
      handleClickOpen();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Bar ref={chartRef} onClick={onClick} options={options} data={data} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Role Data"}
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack
            >
              <Typography variant="body1">
                Month: <b>{labels[index]}</b>
              </Typography>
              <Typography variant="body1">
                Desired Role: <b>{desired[index]}</b>
              </Typography>
              <Typography variant="body1">
                Total Role: <b>{total[index]}</b>
              </Typography>
              <Typography variant="body1">
                Recomended Role: <b>{recommended[index]}</b>
              </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
