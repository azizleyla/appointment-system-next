import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginLayout from "@/components/layout/LoginLayout";

const schema = yup
  .object({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    //           password: yup.string().required("password is required").matches(
    //         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //     ),
    // })
  })
  .required();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <LoginLayout>
      <Box sx={{ paddingTop: "150px" }} width="100%" display="flex" alignItems="center" justifyContent='center'>
        <Box
          boxShadow="0 0 3px #3c485826"
          sx={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            mt={1}
            mb={2}
            fontWeight="600"
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Controller
                rules={{ required: true }}
                control={control}
                name="username"
                render={({ field }) => (
                  <TextField
                    placeholder="Username"
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: ".9375rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        padding: ".375rem .75rem",
                      },
                    }}
                    {...field}
                  />
                )}
              />
              <Typography variant="span" sx={{ color: "red" }}>{errors?.username?.message}</Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <OutlinedInput
                    {...field}
                    placeholder="Password"
                    fullWidth
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: ".9375rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        padding: ".375rem .75rem",
                      },
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />

                )}
              />
              <Typography variant="span" sx={{ color: "red" }}>{errors?.password?.message}</Typography>

            </Box>

            <Button
              sx={{ marginTop: "10px" }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>

    </LoginLayout>

  );
};

export default Login;
