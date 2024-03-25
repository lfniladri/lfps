'use client'
import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Image from 'next/image'

const SignInPage = () => {
    return (
        <>

            <Grid container sx={{ height: "100%" }} spacing={2}>
                <Grid md={6} sx={{ display: { sm: 'none', xs: 'none', md: 'block' }, backgroundColor: "#1976d2", p: 2 }}>
                    <Typography variant="h5" component="h2" sx={{ color: "white" }}>
                        Little Flower Public Schools
                    </Typography>
                </Grid>
                <Grid md={6} sm={12} xs={12} >
                    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Card variant="outlined" sx={{ width: "70%" }}>
                            <CardContent>


                                <Box sx={{ textAlign: "center", mt: 1, mb: 5 }}>
                                    

                                    <Image
                                        src="https://firebasestorage.googleapis.com/v0/b/littleflowerpublicschool-3c090.appspot.com/o/lfps_logo.png?alt=media&token=c7028f17-67a6-4069-b347-f7036f99d7a3"
                                        width={500}
                                        height={500}
                                        alt="LFPS Logo"
                                    />

                                </Box>


                                <Stack direction="column" spacing={2}>
                                    <TextField id="outlined-basic" label="Email Id" variant="outlined" />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                                    <Button variant="contained">SIGN IN</Button>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
};

export default SignInPage;