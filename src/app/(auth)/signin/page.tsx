'use client'
import signIn from "@/firebase/auth/signin";
import { Box, Button, Card, CardContent, FormControl, FormHelperText, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { z } from "zod";

const SignInPage = () => {
    const [errors,setErrors]= useState({})
    const router = useRouter()
    const validationSchema = (values: any) => {
        const LoggInUserForm = z.object({
            email: z.string().email("Invalid email address"),
            password: z.string().min(6, "Password length atleast 6 character long")
        });

        try {
            LoggInUserForm.parse(values);
        } catch (error) {
           
            if (error instanceof z.ZodError) {
                console.log("ERR: ", error.formErrors.fieldErrors)
                setErrors({...error.formErrors.fieldErrors});
                return error.formErrors.fieldErrors
            }
        }

    }

    const handleLogin = async (values: { email: string, password: string }) => {

        const { result, error } = await signIn(values.email, values.password);

        if (error) {
            return console.log(error)
        }
        router.push('/admin/dashboard');
    }


    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validationSchema,
        onSubmit: (values: any) => {
            // console.log("Values:", values)
            handleLogin({...values});
        },
    });



    return (
        <>
            <Grid container sx={{ height: "100%" }} spacing={2}>
                <Grid item md={6} sx={{ display: { sm: 'none', xs: 'none', md: 'block' }, backgroundColor: "#1976d2", p: 2 }}>
                    <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                        Little Flower Public School
                    </Typography>
                </Grid>
                <Grid item md={6} sm={12} xs={12} >
                    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Card variant="outlined" sx={{ width: "70%", boxShadow: 2 }} >
                            <CardContent>
                                <Box sx={{ textAlign: "center", mt: 1, mb: 5 }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/littleflowerpublicschool-3c090.appspot.com/o/lfps_logo.png?alt=media&token=c7028f17-67a6-4069-b347-f7036f99d7a3"
                                        alt="LFPS Logo" />
                                </Box>
                                <form onSubmit={loginFormik.handleSubmit}>
                                    <Stack direction="column" spacing={2}>
                                        <FormControl>
                                            <TextField
                                                id="email"
                                                name="email"
                                                label="Email Id"
                                                variant="outlined"
                                                value={loginFormik.values.email}
                                                onChange={loginFormik.handleChange}
                                                error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
                                                helperText={loginFormik.errors.email && loginFormik.touched.email && String(loginFormik.errors.email)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <TextField
                                                id="password"
                                                name="password"
                                                label="Password"
                                                variant="outlined"
                                                type="password"
                                                value={loginFormik.values.password}
                                                onChange={loginFormik.handleChange}
                                                error={loginFormik.touched.password && Boolean(loginFormik.errors.password)}
                                                helperText={loginFormik.errors.password && loginFormik.touched.password && String(loginFormik.errors.password)}
                                            />
                                            
                                        </FormControl>

                                        <Button variant="contained" type="submit">SIGN IN</Button>

                                    </Stack>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default SignInPage;