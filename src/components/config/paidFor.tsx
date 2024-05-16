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

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { PaymentForCategory } from "@/type/config";

import { convertToUTC, getUTCToLocalTime } from "@/util/dateUtil";
import { useQuery } from "react-query";
import usePaymentSetup from "@/hooks/usePaymentSetup";
import StyledMenu from "../common/menuStyledComponent";
import EditIcon from "@mui/icons-material/Edit";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { z } from "zod";

const PaymentForCategoryComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [paymentForInit, setpaymentForInit] = useState<any>({
    id: "",
    payFor: "",
    description: "",
  });
  const [updateData, setUpdateData] = useState<PaymentForCategory>({} as PaymentForCategory);

  const PaymentService = usePaymentSetup();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openStyleMenu = Boolean(anchorEl);
  const showMore = (
    event: React.MouseEvent<HTMLElement>,
    paymentForCategory: PaymentForCategory
  ) => {
    setAnchorEl(event.currentTarget);
    resetForm();

    setUpdateData({ ...paymentForCategory });

    setpaymentForInit({
      id: paymentForCategory.id,
      payFor: paymentForCategory.payFor,
      description: paymentForCategory.description,
    });
  };
  const closeShowMore = () => {
    setAnchorEl(null);
  };

  const validatePaymentForCategory = (values: any) => {
    const standardForm = z.object({
      payFor: z.string().min(2, "Pay for category can't be empty"),
      description: z.string().min(2, "Pay for description can't be empty"),
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


  const paymentForCategoryFormik = useFormik({
    initialValues: paymentForInit,
    enableReinitialize: true,
    validate: validatePaymentForCategory,
    onSubmit: (values: any) => {

      if (values.id == undefined || values.id == "") {
        savePaymentCategory(values);
      } else {

        let id = updateData.id;
        delete updateData.id;

        id &&
          updatePaymentCategory(
            {
              ...updateData,
              payFor: values.payFor,
              description: values.description,
            },
            id
          );
      }
    },
  });

  function resetForm() {
    paymentForCategoryFormik.resetForm();
    setpaymentForInit({
      payFor: "",
      description: "",
    });
  }

  const {
    isLoading,
    isError,
    error,
    data: paymentForCategory,
    refetch,
  } = useQuery({
    queryKey: ["getPaymentCategory"],
    queryFn: async () => {
      return PaymentService.getAllPaymentForCategory();
    },
    refetchOnWindowFocus: false,
  });

  const savePaymentCategory = async (value: PaymentForCategory) => {
    let data: PaymentForCategory = {
      payFor: value.payFor,
      description: value.description,
      isActive: true,
      isDeleted: false,
      creationOn: convertToUTC(new Date()),
      updatedOn: convertToUTC(new Date()),
    };

    setOpen(false);
    const { result, error } = await PaymentService.savePaymentForCategory(data);

    if (!result) {
      resetForm();
      refetch();
    }
    if (error) {
      return console.log(error);
    }
  };

  const updatePaymentCategory = async (value: PaymentForCategory, docId: string) => {
    setOpen(false);
    const { result, error } = await PaymentService.updatePaymentForCategory(
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
      updatePaymentCategory(
        {
          ...updateData,
          isActive: !updateData.isActive,
        },
        id
      );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt:5, mb: 1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ textDecoration: "none" }}
          onClick={() => {
            resetForm();
            setOpen(true);
          }}
        >
          Add/Edit Payment For
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
            Payment For Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {paymentForCategory &&
              paymentForCategory.map((pCategory: PaymentForCategory) => (
                <Grid item md={3} sm={6} xs={12} key={pCategory.id}>
                  <Tooltip title={pCategory.description}>
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
                            {pCategory.isActive ? (
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
                                {pCategory.payFor}
                              </Typography>
                            </Box>

                            <IconButton
                              color="primary"
                              autoFocus={true}
                              onClick={(e) => showMore(e, pCategory)}
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
                            {getUTCToLocalTime(pCategory.creationOn, "Complete")}
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
              Add/Edit Pay For Category
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

          <form onSubmit={paymentForCategoryFormik.handleSubmit}>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="payFor"
                label="Pay For"
                variant="outlined"
                value={paymentForCategoryFormik.values.payFor}
                onChange={paymentForCategoryFormik.handleChange}
                error={
                  paymentForCategoryFormik.touched.payFor &&
                  Boolean(paymentForCategoryFormik.errors.payFor)
                }
                helperText={
                  paymentForCategoryFormik.errors.payFor &&
                  paymentForCategoryFormik.touched.payFor &&
                  String(paymentForCategoryFormik.errors.payFor)
                }
              />
            </FormControl>

            <FormControl fullWidth>
              <TextField
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Pay For Description"
                variant="outlined"
                value={paymentForCategoryFormik.values.description}
                onChange={paymentForCategoryFormik.handleChange}
                error={
                  paymentForCategoryFormik.touched.description &&
                  Boolean(paymentForCategoryFormik.errors.description)
                }
                helperText={
                  paymentForCategoryFormik.errors.description &&
                  paymentForCategoryFormik.touched.description &&
                  String(paymentForCategoryFormik.errors.description)
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

export default PaymentForCategoryComponent;
