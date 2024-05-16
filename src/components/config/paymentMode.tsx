"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentIcon from "@mui/icons-material/Payment";
import { useState } from "react";
import useConfigSetup from "@/hooks/useConfigSetup";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { PaymentMode } from "@/type/config";

import { convertToUTC, getUTCToLocalTime } from "@/util/dateUtil";
import { useQuery } from "react-query";
import usePaymentSetup from "@/hooks/usePaymentSetup";
import StyledMenu from "../common/menuStyledComponent";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { z } from "zod";

const PaymentModeComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [paymentModeInit, setPaymentModeInit] = useState<any>({
    id: "",
    mode: "",
    description: "",
  });
  const [updateData, setUpdateData] = useState<PaymentMode>({} as PaymentMode);

  const PaymentService = usePaymentSetup();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openStyleMenu = Boolean(anchorEl);
  const showMore = (
    event: React.MouseEvent<HTMLElement>,
    paymentModeData: PaymentMode
  ) => {
    setAnchorEl(event.currentTarget);
    resetForm();

    setUpdateData({ ...paymentModeData });

    setPaymentModeInit({
      id: paymentModeData.id,
      mode: paymentModeData.mode,
      description: paymentModeData.description,
    });
  };
  const closeShowMore = () => {
    setAnchorEl(null);
  };

  const validatePaymentMode = (values: any) => {
    const standardForm = z.object({
      mode: z.string().min(2, "Payment mode can't be empty"),
      description: z.string().min(2, "Payment mode description can't be empty"),
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


  const paymentModeFormik = useFormik({
    initialValues: paymentModeInit,
    enableReinitialize: true,
    validate: validatePaymentMode,
    onSubmit: (values: any) => {

      if (values.id == undefined || values.id == "") {
        savePaymentMode(values);
      } else {

        let id = updateData.id;
        delete updateData.id;

        id &&
          updatePaymentMode(
            {
              ...updateData,
              mode: values.mode,
              description: values.description,
            },
            id
          );
      }
    },
  });

  function resetForm() {
    paymentModeFormik.resetForm();
    setPaymentModeInit({
      mode: "",
      description: "",
    });
  }

  const {
    isLoading,
    isError,
    error,
    data: paymentModeData,
    refetch,
  } = useQuery({
    queryKey: ["getPaymentMode"],
    queryFn: async () => {
      return PaymentService.getAllPaymentMode();
    },
    refetchOnWindowFocus: false,
  });

  const savePaymentMode = async (value: PaymentMode) => {
    let data: PaymentMode = {
      mode: value.mode,
      description: value.description,
      isActive: true,
      isDeleted: false,
      creationOn: convertToUTC(new Date()),
      updatedOn: convertToUTC(new Date()),
      order: 1,
    };

    setOpen(false);
    const { result, error } = await PaymentService.savePaymentMode(data);

    if (!result) {
      resetForm();
      refetch();
    }
    if (error) {
      return console.log(error);
    }
  };

  const updatePaymentMode = async (value: PaymentMode, docId: string) => {
    setOpen(false);
    const { result, error } = await PaymentService.updatePaymentMode(
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
      updatePaymentMode(
        {
          ...updateData,
          isActive: !updateData.isActive,
        },
        id
      );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt:2, mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => {
            resetForm();
            setOpen(true);
          }}
        >
          Add Payment Modes
          <PaymentIcon sx={{ ml: 1 }} />
        </Button>
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{backgroundColor: "#1976d22b"}}
        >
          <IconButton color="primary">
            <CurrencyRupeeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ pt: 0.5 }}>
            Payment Modes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {paymentModeData &&
              paymentModeData.map((pMode: PaymentMode) => (
                <Grid item md={3} sm={6} xs={12} key={pMode.id}>
                  <Tooltip title={pMode.description}>
                    <Card sx={{ border: "1px solid #dbdbdb" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <Box>
                          <Typography variant="caption" sx={{ float: "right" }}>
                            {pMode.isActive ? (
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
                        <Box sx={{ padding: "1px 10px" }}>
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
                              <IconButton color="primary" sx={{ pl: 0 }}>
                                <PaymentIcon />
                              </IconButton>
                              <Typography variant="body1" sx={{ mt: 1 }}>
                                {pMode.mode}
                              </Typography>
                            </Box>

                            <IconButton
                              color="primary"
                              autoFocus={true}
                              onClick={(e) => showMore(e, pMode)}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: " flex-end",
                            alignContent: "flex-end",
                            height: "100%",
                            pr: 1,
                            pb: 1,
                          }}
                        >
                          <Typography variant="caption">
                            {getUTCToLocalTime(pMode.creationOn, "Complete")}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Tooltip>
                </Grid>
              ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

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
              Add/Edit Payment Modes
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

          <form onSubmit={paymentModeFormik.handleSubmit}>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="mode"
                label="Payment Mode"
                variant="outlined"
                value={paymentModeFormik.values.mode}
                onChange={paymentModeFormik.handleChange}
                error={
                  paymentModeFormik.touched.mode &&
                  Boolean(paymentModeFormik.errors.mode)
                }
                helperText={
                  paymentModeFormik.errors.mode &&
                  paymentModeFormik.touched.mode &&
                  String(paymentModeFormik.errors.mode)
                }
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Payment Description"
                variant="outlined"
                value={paymentModeFormik.values.description}
                onChange={paymentModeFormik.handleChange}
                error={
                  paymentModeFormik.touched.description &&
                  Boolean(paymentModeFormik.errors.description)
                }
                helperText={
                  paymentModeFormik.errors.description &&
                  paymentModeFormik.touched.description &&
                  String(paymentModeFormik.errors.description)
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
};

export default PaymentModeComponent;
