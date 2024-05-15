"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Standard } from "@/type/config";
import { convertToUTC, getUTCToLocalTime } from "@/util/dateUtil";
import useConfigSetup from "@/hooks/useConfigSetup";
import { useQuery } from "react-query";
import { useFormik } from "formik";
import { z } from "zod";
import EditIcon from "@mui/icons-material/Edit";
import StyledMenu from "@/components/common/menuStyledComponent";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function StandardPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [standardInit, setStandardInit] = useState<any>({
    id: "",
    standard: "",
    description: "",
  });
  const [updateData, setUpdateData] = useState<Standard>({} as Standard);

  const ConfigSetupService = useConfigSetup();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openStyleMenu = Boolean(anchorEl);
  const showMore = (
    event: React.MouseEvent<HTMLElement>,
    standardData: Standard
  ) => {
    setAnchorEl(event.currentTarget);
    resetForm();

    setUpdateData({ ...standardData });

    setStandardInit({
      id: standardData.id,
      standard: standardData.name,
      description: standardData.description,
    });
  };
  const closeShowMore = () => {
    setAnchorEl(null);
  };

  const validationSchema = (values: any) => {
    const standardForm = z.object({
      standard: z.string().min(1, "Standard can't be empty"),
      description: z.string().min(1, "Description can't be empty"),
    });

    try {
      standardForm.parse(values);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("ERR: ", error.formErrors.fieldErrors);
        return error.formErrors.fieldErrors;
      }
    }
  };

  const standardFormik = useFormik({
    initialValues: standardInit,
    enableReinitialize: true,
    validate: validationSchema,
    onSubmit: (values: any) => {
      if (values.id == undefined || values.id == "") {
        saveStandard(values);
      } else {
        let id = updateData.id;
        delete updateData.id;

        id &&
          updateStandard(
            {
              ...updateData,
              name: values.standard,
              description: values.description,
            },
            id
          );
      }
    },
  });

  function resetForm() {
    standardFormik.resetForm();
    setStandardInit({
      standard: "",
      description: "",
    });
  }

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

  const saveStandard = async (value: any) => {
    let data: Standard = {
      name: value.standard,
      description: value.description,
      isActive: true,
      isDeleted: false,
      creationOn: convertToUTC(new Date()),
      updatedOn: convertToUTC(new Date()),
      order: 1,
    };

    setOpen(false);
    const { result, error } = await ConfigSetupService.saveStandard(data);

    if (!result) {
      resetForm();
      refetch();
    }
    if (error) {
      return console.log(error);
    }
  };

  const updateStandard = async (value: Standard, docId: string) => {
    setOpen(false);
    const { result, error } = await ConfigSetupService.updateStandard(
      value,
      docId
    );

    if (!result) {
      resetForm();
      refetch();
    }
    if (error) {
      return console.log(error);
    }
  };

  const update = () => {
    closeShowMore();
    setOpen(true);
  };

  const toggleActivation = () => {
    let id = updateData.id;
    delete updateData.id;

    id &&
      updateStandard(
        {
          ...updateData,
          isActive: !updateData.isActive,
        },
        id
      );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => {
            resetForm();
            setOpen(true);
          }}
        >
          Add Degree <SchoolIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      <Grid container spacing={2} sx={{mt:2}}>
        {standardData &&
          standardData.map((std: Standard) => (
            <Grid item md={3} sm={6} xs={12} key={std.id}>
              <Card>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box>
                    <Typography variant="caption" sx={{ float: "right" }}>
                      {std.isActive ? (
                        <Box
                          sx={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            padding: "1px 5px",
                            borderRadius: 1,
                          }}
                        >
                          Active
                        </Box>
                      ) : (
                        <Box
                          className="bg-danger"
                          sx={{
                            color: "white",
                            padding: "1px 5px",
                            borderRadius: 1,
                          }}
                        >
                          In Active
                        </Box>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{padding:"1px 10px"}}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexGrow: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <IconButton color="primary" sx={{ pl: 0 }}>
                          <SchoolIcon />
                        </IconButton>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          {std.name}
                        </Typography>
                      </Box>

                      <IconButton
                        color="primary"
                        autoFocus={true}
                        onClick={(e) => showMore(e, std)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Tooltip title={std.description}>
                      <Box
                        sx={{
                          textAlign: "justify",
                          flexGrow: 1,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Typography variant="caption">
                          <b>Description: </b> {std.description}
                        </Typography>
                      </Box>
                    </Tooltip>
                    <Typography variant="caption" sx={{ float: "right" }}>
                      {getUTCToLocalTime(std.creationOn, "Complete")}
                    </Typography>{" "}
                  </Box>
                </Box>
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

          <form onSubmit={standardFormik.handleSubmit}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="standard"
                label="Standard"
                variant="outlined"
                value={standardFormik.values.standard}
                onChange={standardFormik.handleChange}
                error={
                  standardFormik.touched.standard &&
                  Boolean(standardFormik.errors.standard)
                }
                helperText={
                  standardFormik.errors.standard &&
                  standardFormik.touched.standard &&
                  String(standardFormik.errors.standard)
                }
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Description"
                variant="outlined"
                value={standardFormik.values.description}
                onChange={standardFormik.handleChange}
                error={
                  standardFormik.touched.description &&
                  Boolean(standardFormik.errors.description)
                }
                helperText={
                  standardFormik.errors.description &&
                  standardFormik.touched.description &&
                  String(standardFormik.errors.description)
                }
              />
            </FormControl>

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
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Drawer>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={openStyleMenu}
        onClose={closeShowMore}
      >
        <MenuItem onClick={update} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          disableRipple
          onClick={() => {
            closeShowMore();
            toggleActivation();
          }}
        >
          <ToggleOnIcon />
          {updateData.isActive ? "De Activate" : "Activate"}
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
