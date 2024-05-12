import { Box, Button, FormLabel, Grid, List, ListItem, TextField, Textarea, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import classes from "./style.module.css";
import Select from "react-select"
import { useRouter } from 'next/router';

let data = [
	{
		img: "https://doctris-react-admin.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg",
		title: "Dr. Calvin Carlon",
		experience: 3,
		position: "Eye Doctor"
	},
	{
		img: "https://doctris-react-admin.vercel.app/static/media/03.b192aca452235f61b392.jpg",
		title: "Dr. Alia Reddy",
		experience: 4,
		position: "Psychotherapy"
	},
	{
		img: "https://doctris-react-admin.vercel.app/static/media/04.f645789423636f851180.jpg",
		title: "Dr. Toni Kovar",
		experience: 6,
		position: "Psychotherapy"
	}
]
const AddDoctor = () => {
	const router = useRouter();

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
		<Box>
			<Typography component="h5" fontSize="1.2rem" fontWight="600">
				Add New Doctor
			</Typography>
			<Grid spacing={2} container mt={4}>

				<Grid item lg={8}>
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
				</Grid>

				<Grid item lg={4}>
					<Box className={classes.doctorsListContainer}>
						<Typography variant='h5' fontSize="1.2rem" sx={{ padding: "10px 0" }}>Doctors List</Typography>
						<Box sx={{ height: "100%", maxHeight: "500px" }}>
							<List sx={{ padding: "20px 0", borderTop: "1px solid #e9ecef" }}>
								{data.map((item, index) => (
									<ListItem key={index} alignItems='flex-start' sx={{ padding: 0, marginBottom: "25px", gap: "15px" }}>
										<Box component='img' sx={{
											width: "110px", boxShadow: "0 0 3px #3c485826 !important",
											borderRadius: "10px",
											height: "110px"
										}} src={item.img} />
										<Box>
											<a sx={{ color: "#212529", fontWeight: "600" }}>{item.title}</a>
											<Typography sx={{ color: "#8492a6" }} my={0.5} component="p">{item.position}</Typography>
											<Typography sx={{ color: "#8492a6" }} component="p">{item.experience} Years Experienced</Typography>

										</Box>
									</ListItem>
								))}


							</List>
							<Button onClick={() => {
								router.push('/doctors')
								localStorage.setItem('link', 'Doctors')
							}
							} variant='contained'>All Doctors</Button>
						</Box>

					</Box>
				</Grid>
			</Grid>

		</Box>
	)
}


export default AddDoctor