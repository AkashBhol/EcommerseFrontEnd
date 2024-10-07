import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';
import CommonUtil from '../Validation/CommonUtil';
import CustomInput from '../Validation/CustomInput';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { login } from '../Service/AuthorizationService';
import { enqueueSnackbar } from 'notistack';

const Login = ({ onLoginSuccess }) => {
    const navigate = useNavigate();

    const [payload, setPayload] = useState({
        username: "",
        password: "",
    })

    const [error, setError] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        const name = event.target.name;
        setPayload({
            ...payload,
            [name]: event.target.value,
        });

        setError({
            ...error,
            [name]: ""
        });
    };
    const resetError = (fieldName) => {
        setError((prevError) => ({
            ...prevError,
            [fieldName]: ""
        }));
    };


    const validateForm = () => {
        if (CommonUtil.isEmptyString(payload.username)) {
            setError({
                ...error,
                username: "This field is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.password)) {
            setError({
                ...error,
                password: "This field is required",
            });
            return;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            login(payload).then((res) => {
                console.log("Response data:", res.data);
                const { token } = res.data;

                // Store the token in localStorage
                localStorage.setItem('authToken', token);
                //message
                enqueueSnackbar("Logged In SuccessFully", { variant: "success" });
                onLoginSuccess();
                navigate("/home");
            })
                .catch((error) => {
                    enqueueSnackbar("There will be some problem", { variant: "success" });
                });
        }
    };

    return (
        <Grid item container justifyContent={"center"} textAlign={"center"} style={{ minHeight: "80vh", marginTop: "2vh", marginBottom: "10vh" }}>
            <Grid item xs={12} sm={8} md={4}>
                <Card style={{ padding: "20px", textAlign: "center" }}>
                    <LockOpenIcon
                        style={{
                            backgroundColor: "blue",
                            fontSize: "40px",
                            color: "white",
                            borderRadius: "50%",
                            padding: "8px",
                            marginRight: "10px"
                        }}
                    />
                    <Typography
                        style={{
                            fontSize: "30px",
                            color: "blue",
                            paddingTop: "2px"
                        }}
                    >
                        Login
                    </Typography>
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="USER NAME"
                            size="small"
                            name="username"
                            error={error.username}
                            resetError={() => resetError("username")}
                            value={payload.name}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 30,
                            }}
                            helperText={error.username}
                            // validation={"alpha-numeric-ch-th"}
                            placeholder={"Enter  UserName"}
                        />

                    </Box>
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="PASSWORD"
                            size="small"
                            name="password"
                            error={error.password}
                            resetError={() => resetError("password")}
                            value={payload.password}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 30,
                            }}
                            helperText={error.password}
                            validation={"password"}
                            placeholder={"Enter  password"}
                        />
                    </Box>
                    <Box mb={2}>
                        <Button onClick={handleSubmit}>Login</Button>
                        <Button onClick={() => navigate("/signIn")}>SignIN</Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Login;