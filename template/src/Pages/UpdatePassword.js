import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import axios from "axios";
import { enqueueSnackbar } from "notistack";
import CommonUtil from "../Validation/CommonUtil";
import PassWordInputField from "../LoginAndSiginIn/PassWordInputField";
import { updatePassword } from "../Service/UserService";
import { useNavigate } from "react-router-dom";

const UpdatePassword = (props) => {
    const { open, setOpen } = props
    const [email, setEmail] = useState("");
    const [payload, setPayload] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        conformPassword: ""
    })

    const [error, setError] = useState({
        oldPassword: "",
        newPassword: "",
        conformPassword: ""
    })

    const handleChange = (event) => {
        const name = event.target.name
        setPayload({
            ...payload,
            [name]: event.target.value
        })
        setError({
            ...error,
            name: ""
        })
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = () => {
        const user = CommonUtil.decodeToken();
        const email_ = user?.sub;
        setEmail(email_);
    }


    const handleUpdate = () => {
        let request = {
            ...payload,
            email: email
        }

        updatePassword(request).then((res) => {
            const code = res?.data?.code;
            const message = res.data?.message || "Category Created Successfully";
            if (code === "047") {
                enqueueSnackbar(message, { variant: "error" })
            }
            else if (code === "048") {
                enqueueSnackbar(message, { variant: "error" });
            }
            else if (code === "049") {
                enqueueSnackbar(message, { variant: "success" });
            }
            else if (code === "050") {
                enqueueSnackbar(message, { variant: "error" });
            }
            else if (code === "051") {
                enqueueSnackbar(message, { variant: "error" });
            }
            else {
                enqueueSnackbar(message, { variant: "success" })
              
            }
        }).catch((error) => {
            const status = error?.response?.data;
            if (status === 401) {
                window.location = "/";
            }
        })
    }

    // const handleCancel = () => {
    //     debugger
    //     navigate("/home");
    // }

    return (
        <Grid container >
            <Grid item container md={12} pt={2}>
                <PassWordInputField
                    lable={"Old Password"}
                    onChange={handleChange}
                    value={payload.oldPassword}
                    name="oldPassword"
                />
            </Grid>
            <Grid item container md={12} pt={2}>
                <PassWordInputField
                    lable={"New Password"}
                    onChange={handleChange}
                    value={payload.newPassword}
                    name="newPassword"
                />
            </Grid>
            <Grid item container md={12} pt={2}>
                <PassWordInputField
                    lable={"conformPassword"}
                    onChange={handleChange}
                    value={payload.conformPassword}
                    name="conformPassword"

                />
            </Grid>
            <Grid>
                <Button onClick={handleUpdate} >Update</Button>
                {/* <Button onClick={handleCancel}>Cancel</Button>*/}
            </Grid>
        </Grid>

    )
}
export default UpdatePassword;