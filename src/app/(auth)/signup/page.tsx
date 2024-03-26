'use client'
import signUp from "@/firebase/auth/signup";
import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { z } from "zod";
// https://firebase.google.com/docs/auth/web/password-auth#web-modular-api
const SignupPage = () => {
    
    const handleForm = async (values: any) => {
        
        
        const { result, error } = await signUp(values.email, values.password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        // return router.push("/admin/dashboard")
    }


    const signupFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values: any) => {
            handleForm(values);
        }

    });



    return (
        <>
            <Grid container sx={{ height: "100%" }} spacing={2} >
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

                                <Stack direction="column" spacing={2} gap={2}>
                                    <form onSubmit={signupFormik.handleSubmit} className="form">
                                        <TextField label="Email Id" variant="outlined" id="email"
                                            name="email" value={signupFormik.values.email}
                                            onChange={signupFormik.handleChange} />

                                        <TextField label="Password" variant="outlined" 
                                         id="password" name="password" value={signupFormik.values.password}
                                         onChange={signupFormik.handleChange}/>

                                        <Button variant="contained" type="submit">Register</Button>
                                    </form>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};

export default SignupPage;