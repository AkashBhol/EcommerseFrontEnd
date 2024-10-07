import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { toast } from 'react-toastify';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import Swal from "sweetalert2";
import CustomInput from "../Validation/CustomInput";
import CommonUtil from "../Validation/CommonUtil";
import { enqueueSnackbar } from "notistack";
const SignIn = () => {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: ""
    });

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: ""
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
        if (CommonUtil.isEmptyString(payload.firstName)) {
            setError({
                ...error,
                firstName: "This field is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.lastName)) {
            setError({
                ...error,
                lastName: "This field is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.email)) {
            setError({
                ...error,
                email: "This field is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.mobile)) {
            setError({
                ...error,
                mobile: "This field is required",
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
            axios.post("http://localhost:8090/api/user/create ", payload).then((res) => {
                enqueueSnackbar("")
                navigate("/")
            })
        }
    }

    return (
        <Grid item container justifyContent={"center"} textAlign={"center"} style={{ minHeight: "80vh", marginTop: "2vh", marginBottom: "10vh" }}>
            <Grid item xs={12} sm={8} md={4}>
                <Card style={{ padding: "20px", textAlign: "center" }}>
                    <Typography
                        style={{
                            fontSize: "30px",
                            color: "black",
                            marginRight: "8px" 
                        }}
                    >
                        Sign In
                    </Typography>
                    <VpnKeyTwoToneIcon
                        style={{
                            fontSize: "40px",
                            color: "blue"
                        }}
                    />
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="NAME"
                            size="small"
                            name="firstName"
                            error={error.firstName}
                            resetError={() => resetError("firstName")}
                            value={payload.firstName}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 20,
                            }}
                            helperText={error.firstName}
                            validation={"alpha-numeric-ch-th"}
                            placeholder={"Enter First Name"}
                        />

                    </Box>
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="lastName"
                            size="small"
                            name="lastName"
                            error={error.lastName}
                            resetError={() => resetError("lastName")}
                            value={payload.lastName}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 10,
                            }}
                            helperText={error.lastName}
                            validation={"alpha-numeric-ch-th"}
                            placeholder={"Enter lastName"}
                        />
                    </Box>
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="email"
                            size="small"
                            name="email"
                            error={error.email}
                            resetError={() => resetError("email")}
                            value={payload.email}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 30,
                            }}
                            helperText={error.email}
                            validation={"email"}
                            placeholder={"Enter email"}
                        />
                    </Box>
                    <Box mb={2}>
                        <CustomInput
                            id="AddProduct1"
                            required
                            label="MOBILE"
                            size="small"
                            name="mobile"
                            error={error.mobile}
                            resetError={() => resetError("mobile")}
                            value={payload.mobile}
                            handleChange={handleChange}
                            inputProps={{
                                maxLength: 10,
                            }}
                            helperText={error.mobile}
                            validation={"mobile"}
                            placeholder={"Enter mobile"}
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
                            placeholder={"Enter password"}
                        />
                    </Box>
                    <Button onClick={handleSubmit}>SignIn</Button>
                    <Button onClick={() => navigate("/")}>Back</Button>
                </Card>
            </Grid>
        </Grid>
    )
}
export default SignIn;