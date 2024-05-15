"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Standard } from "@/type/config";
import { convertToUTC, getUTCToLocalTime } from "@/util/dateUtil";
import useConfigSetup from "@/hooks/useConfigSetup";
import { useQuery } from "react-query";

export default function StandardPage() {
  const [open, setOpen] = useState<boolean>(false);
  const ConfigSetupService = useConfigSetup();


  const {
    isLoading,
    isError,
    error,
    data: standardData,
    refetch,
  } = useQuery({
    queryKey: ["getStandardList"],
    queryFn: async () => {
      return ConfigSetupService.getAllStandard();
    },
    refetchOnWindowFocus: false,
  });

  const saveStandard = async () => {
    
    

    let data: Standard = {
      name: "standard",
      description:"",
      isDeleted: false,
      creationOn: convertToUTC(new Date()),
      updatedOn: convertToUTC(new Date()),
      order: 1,
    };

    setOpen(false)
    const { result, error } = await ConfigSetupService.saveStandard(data);

    if (!result) {
      refetch();
    }
    if (error) {
      return console.log(error);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => setOpen(true)}
        >
          Add Degree <SchoolIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      <Grid container spacing={2}>
        {standardData &&
          standardData.map((item: any) => (
            <Grid item md={3} sm={6} xs={12} key={item.id}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <IconButton color="primary">
                        <SchoolIcon />
                      </IconButton>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {item.data.StandardName}
                      </Typography>
                    </Box>
                    <Box>
                      <Switch
                        defaultChecked={!item.data.isDeleted}
                        size="small"
                        onChange={(e) => {
                          console.log(e.target);
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="caption" sx={{ float: "right" }}>
                    {getUTCToLocalTime(item.data.creationOn, "Complete")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ mt: 5, p: 3, width: "360px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography color="primary" component={Box} fontWeight={600}>
              Add Standard
            </Typography>
            <IconButton
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Standard"
            variant="outlined"
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            id="outlined-basic"
            label="Description"
            variant="outlined"
           
          />

          <Box
            sx={{
              display: "flex",
              marginTop: `auto`,
              mt: 2,
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={saveStandard}>
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
