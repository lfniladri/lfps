'use client'
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";


const steps = [
    {
        label: 'Admission Seeking In',
        description: `Content goes here`,
    },
    {
        label: 'Candidate’s Personal Details',
        description: `Content goes here`,
    },
    {
        label: 'Residential Address & Family information',
        description: `Content goes here`,
    },
    {
        label: 'In case of Emergency Call Order of Priority with 1st,2nd,3rd?',
        description: `Content goes here`,
    },
    {
        label: 'Sibling Information:',
        description: `Content goes here`,
    },
    {
        label: 'Reference Details:',
        description: `Content goes here`,
    },{
        label: 'Declaration:',
        description: `Content goes here`,
    },{
        label: 'For School office use only:',
        description: `Content goes here`,
    }
];







const AdmissionPage = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {/* <Typography>{step.description}</Typography> */}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}>
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>

    );
}
export default AdmissionPage;