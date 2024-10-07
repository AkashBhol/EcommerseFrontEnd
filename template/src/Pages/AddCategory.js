import { Button, Grid, Tooltip } from "@mui/material";
import MainContent from "../Design/MainContent";
import CustomInput from "../Validation/CustomInput";
import { useEffect, useState } from "react";
import { saveCategory } from "../Service/CategoryService";
import { enqueueSnackbar } from "notistack";
import { Navigate, useNavigate } from "react-router-dom";
import CommonUtil from "../Validation/CommonUtil";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const AddCategory = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [payload, setPayload] = useState({
        categoryTitle: ""
    });

    const [error, setError] = useState({
        categoryTitle: "",
        email: ""
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

    //for fetching the email from token
    const fetchDetails = () => {
        const user = CommonUtil.decodeToken();
        const email_ = user?.sub;
        setEmail(email_);
    }

    useEffect(() => {
        fetchDetails();
    })

    const validForm = () => {
        if (CommonUtil.isEmptyString(payload.categoryTitle)) {
            setError({
                ...error,
                categoryTitle: "That feild should not be empty"
            })
            return;
        }
        return true;
    }


    const handleSave = () => {
        if (validForm()) {
            let request = {
                ...payload,
                email: email
            }
            saveCategory(request).then((res) => {
                const code = res?.data?.code;
                const message = res.data?.message || "Category Created Successfully";
                if (code === "034") {
                    enqueueSnackbar(message, { variant: "error" });
                }
                else if (code === "040") {
                    enqueueSnackbar(message, { variant: "error" });
                }
                else {
                    enqueueSnackbar(message, { variant: "success" });
                    navigate("/cate")
                }

            }).catch((error) => {
                const status = error.response?.status;
                // Check if the status is 401 (Unauthorized)
                if (status === 401) {
                    window.location = "/";
                }
                else {
                    const message = error.response?.data?.message || "An error occurredsdfdgfhjh";
                    enqueueSnackbar(message, { variant: "error" })
                }
            })
        }
    }

    const handleBack = () => {
        navigate("/cate")
    }

    return (
        <MainContent title={"Category"}>
            <Grid container spacing={2} px={2}>
                <Tooltip title="Go Back to category">
                    <Button variant="contained" onClick={() => handleBack()} style={{ height: "40px", width: "40px" }}>
                        <ArrowBackIosIcon />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid container spacing={2} px={2}>
                <CustomInput
                    id="categoryTitle"
                    required
                    label="categoryTitle"
                    size="small"
                    name="categoryTitle"
                    error={error.categoryTitle}
                    resetError={() => resetError("categoryTitle")}
                    value={payload.categoryTitle}
                    handleChange={handleChange}
                    inputProps={{
                        maxLength: 30,
                    }}
                    helperText={error.categoryTitle}
                    // validation={"alpha-numeric-ch-th"}
                    placeholder={"Enter  categoryTitle"}
                />
            </Grid>
            <Grid container spacing={2} px={2}>
                <Button onClick={() => handleSave(payload)} style={{ paddingTop: "34px" }}>Submit
                </Button>
            </Grid>

        </MainContent>
    )
}
export default AddCategory;