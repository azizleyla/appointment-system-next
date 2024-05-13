import { Box, Button, FormLabel, Grid, TextField } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import classes from "./style.module.css";
import Select from "react-select"

const DoctorForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
    })

    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <Box className={classes.formBox}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid spacing={3} container >
                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >First Name</FormLabel>
                        <Controller style={{ width: "100%" }} className={classes.formControl} control={control} name="firstName"
                            render={({ field }) => <TextField sx={{
                                "& .MuiInputBase-input": {
                                    fontSize: ".9375rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: ".375rem .75rem"
                                }

                            }} placeholder='First Name:' {...field} />}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >Last Name</FormLabel>
                        <Controller className={classes.inputField} control={control} name="lastName"
                            render={({ field }) => <TextField placeholder='Last Name' sx={{
                                "& .MuiInputBase-input": {
                                    fontSize: ".9375rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: ".375rem .75rem"
                                }
                            }
                            } {...field} />}

                        />
                    </Grid>
                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >Email</FormLabel>
                        <Controller control={control} name="email"
                            render={({ field }) => <TextField placeholder='Email' sx={{
                                "& .MuiInputBase-input": {
                                    fontSize: ".9375rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: ".375rem .75rem"
                                }
                            }
                            } {...field} />}

                        />
                    </Grid>
                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >Phone No.</FormLabel>
                        <Controller control={control} name="phoneNumber"
                            render={({ field }) => <TextField placeholder='Phone no.:' sx={{
                                "& .MuiInputBase-input": {
                                    fontSize: ".9375rem",
                                    fontWeight: 400,
                                    lineHeight: 1.5,
                                    padding: ".375rem .75rem"
                                }
                            }
                            } {...field} />}

                        />
                    </Grid>
                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >Departments</FormLabel>
                        <Controller control={control} name="department"
                            render={({ field }) => <Select
                                {...field}
                                options={[
                                    { value: "chocolate", label: "Chocolate" },
                                    { value: "strawberry", label: "Strawberry" },
                                    { value: "vanilla", label: "Vanilla" },
                                ]}
                            />}

                        />
                    </Grid>
                    <Grid item md={6}>
                        <FormLabel className={classes.formLabel} >Gender</FormLabel>
                        <Controller control={control} name="gender"
                            render={({ field }) => <Select
                                {...field}
                                options={[
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                ]}
                            />}

                        />
                    </Grid>
                    <Grid item md={12}>
                        <FormLabel className={classes.formLabel} >Bio</FormLabel>
                        <Controller control={control} name="bio"
                            render={({ field }) => <textarea className={classes.customTextarea} rows={5} name="Size" placeholder="Large" />}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" sx={{ marginTop: "20px" }} variant="contained" color="primary">Add Doctor</Button>
            </form>
        </Box>
    )
}

export default DoctorForm