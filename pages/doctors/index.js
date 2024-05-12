import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { doctorsData } from "./constant";
import { useRouter } from "next/router";

const Doctor = () => {
  const router = useRouter()
  return (
    <Box sx={{ padding: "94px 14px 24px" }}>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography component="h5" fontSize="1.2rem" fontWight="600">

          Doctors
        </Typography>
        <Button onClick={() => router.push('/doctors/add-doctor')} color="primary" variant="contained">
          Add New Doctor
        </Button>
      </Stack>
      <Grid mt={2} container spacing={3}>
        {doctorsData.map((doctor, index) => (
          <Grid key={index}
            lg={3} item>
            <Card
              sx={{
                borderRadius: "6px",
                boxShadow: "0 0 3px #3c485826",
                "&:hover .MuiCardContent-root": {
                  background: "#396CF0",
                  color: "#fff",
                  "& .job": {
                    color: "#fff",
                  },
                },
              }}
            >
              <Box
                sx={{ height: "auto", maxWidth: "100%" }}
                component="img"
                src={doctor.photo}
              ></Box>
              <CardContent
                sx={{
                  display: "flex",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  fontWeight="600"
                  fontSize="16px"
                  gutterBottom
                  variant="h5"
                  component="a"
                >
                  {doctor.name}
                </Typography>
                <Typography
                  className="job"
                  variant="body2"
                  color="text.secondary"
                >
                  {doctor.job}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Doctor;
