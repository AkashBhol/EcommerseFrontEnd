import { useEffect, useState } from "react";
import MainContent from "../Design/MainContent";
import { Autocomplete, Box, Button, Grid, TextField, Tooltip, Typography } from "@mui/material";
import CustomInput from "../Validation/CustomInput";
import DropzoneComponent from "../ImageUploader/DropzoneComponent";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getsAllCategory } from "../Service/CategoryService";
import { createProduct } from "../Service/ProductService";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import CommonUtil from "../Validation/CommonUtil";

const AddProduct = (props) => {
    const navigate = useNavigate();
    const [thumbnailImageUrl, setThumbnailImageUrl] = useState(null);
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [categories, SetCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [formData1, setFormData1] = useState(null);
    const [payload, setPayload] = useState({
        productName: "",
        productDescription: "",
        price: "",
        quantity: "",
        file: "",
        categoryName: ""
    })

    const [error, setError] = useState({
        productName: "",
        productDescription: "",
        price: "",
        quantity: "",
        file: "",
        categoryName: ""
    })


    //for storing the data into the payload
    const handleChange = (event) => {
        const name = event.target.name;
        setPayload({
            ...payload,
            [name]: event.target.value
        });

        setError({
            ...error,
            [name]: ""
        })
    }

    //setting error
    const resetError = (fieldName) => {
        setError((prevError) => ({
            ...prevError,
            [fieldName]: ""
        }))
    }

    const validForm = () => {
        if (CommonUtil.isEmptyString(payload.productName)) {
            setError({
                ...error,
                productName: "This field is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.productDescription)) {
            setError({
                ...error,
                productDescription: "This feild is required",
            });
            return;
        }
        if (CommonUtil.isEmptyString(payload.price)) {
            setError({
                ...error,
                price: "This feild is required",
            })
            return;
        }
        if (CommonUtil.isEmptyString(payload.quantity)) {
            setError({
                ...error,
                quantity: "This Feild Is required"
            })
            return;
        }
        // if (CommonUtil.isEmptyString(category.)) {
        //     debugger
        //     setError({
        //         ...error,
        //         categoryName: "This feild is reqauired"
        //     })
        //     return;
        // }
        return true;
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            alert(`File selected: ${file.name}`);

        } else {
            alert("No file selected");
        }
    };

    const handleImageUploadThumbnail = (excelData) => {
        const file = excelData[0];
        if (!file) {
            alert("not")
        } else {
            setImageFile(excelData[0]);
            setThumbnailImage(excelData[0].name);
            setThumbnailImageUrl(URL.createObjectURL(excelData[0]));
            props.getExcelFile(excelData[0]);
        }
    }

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = () => {
        getsAllCategory().then((res) => {
            SetCategories(res?.data?.data);
        })
    }


    const handleSave = () => {

        if (!imageFile) {
            enqueueSnackbar("Please upload an image", { variant: "warning" });
            return;
        }
        const formData = new FormData();
        if (imageFile) {
            formData.append('file', imageFile);
        }
        formData.append('productName', payload.productName);
        formData.append('productDescription', payload.productDescription);
        formData.append('price', payload.price);
        formData.append('quantity', payload.quantity);
        if (category) {
            formData.append('categoryName', category.categoryTitle);
        }

        if (validForm()) {
            createProduct(formData).then((res) => {
                enqueueSnackbar("Product Created Successfully", { variant: "success" })
                navigate("/product")
            })
            // .catch((error) => {
            //     const status = error?.response?.status;
            //     if (status === 401) {
            //         window.location = "/";
            //     }
            // });
        }
    };


    const handleBack = () => {
        navigate("/product")
    }

    return (
        <MainContent title={"Add Product"}>
            <Grid container spacing={2} px={2}>
                <Tooltip title="Go Back to category">
                    <Button variant="contained" onClick={() => handleBack()} style={{ height: "40px", width: "40px" }}>
                        <ArrowBackIosIcon />
                    </Button>
                </Tooltip>
            </Grid>
            <Grid container spacing={2} px={2}>

                {/* Left side - DropzoneComponent */}
                <Grid item xs={12} md={6} lg={4} pt={8}>
                    <Typography variant="body2">
                        <span>*Upload Image</span>
                    </Typography>
                    <DropzoneComponent getExcelFile={(excelData) => handleImageUploadThumbnail(excelData)}>
                        {thumbnailImageUrl ? (
                            <img
                                src={thumbnailImageUrl}
                                alt="Thumbnail Preview"
                                draggable="false"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        ) : (
                            <Box mt={2} p={1} sx={{
                                border: '2px dashed #36C96D', borderRadius: '5px',
                                backgroundColor: "rgba(54, 201, 109,0.1)", display: 'flex',
                                justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '290px'
                            }}>
                                <Typography sx={{ fontSize: "14px", textAlign: 'center', opacity: '0.8' }}>
                                    {thumbnailImage !== null ? thumbnailImage : "Drag and Drop image Or upload Image"}
                                </Typography>
                            </Box>
                        )}
                    </DropzoneComponent>
                </Grid>

                {/* Right side - Two CustomInput fields */}
                <Grid item xs={12} md={6} lg={8} >
                    <Grid container direction="column" spacing={2}>

                        {/* First CustomInput */}
                        <Grid item >
                            <CustomInput
                                id="productName"
                                required
                                label="productName"
                                size="small"
                                name="productName"
                                error={error.productName}
                                resetError={() => resetError("productName")}
                                value={payload.productName}
                                handleChange={handleChange}
                                inputProps={{
                                    maxLength: 30,
                                }}
                                helperText={error.productName}
                                // validation={"alpha-numeric-ch-th"}
                                placeholder={"Enter  productName"}
                            />
                        </Grid>

                        {/* Second CustomInput */}
                        <Grid item >
                            <CustomInput
                                id="productDescription"
                                required
                                label="productDescription"
                                size="small"
                                name="productDescription"
                                error={error.productDescription}
                                resetError={() => resetError("productDescription")}
                                value={payload.productDescription}
                                handleChange={handleChange}
                                inputProps={{
                                    maxLength: 30,
                                }}
                                helperText={error.productDescription}
                                // validation={"alpha-numeric-ch-th"}
                                placeholder={"Enter  productDescription"}
                            />
                        </Grid>
                        <Grid item >
                            <CustomInput
                                id="price"
                                required
                                label="price"
                                size="small"
                                name="price"
                                error={error.price}
                                resetError={() => resetError("price")}
                                value={payload.price}
                                handleChange={handleChange}
                                inputProps={{
                                    maxLength: 30,
                                }}
                                helperText={error.price}
                                // validation={"alpha-numeric-ch-th"}
                                placeholder={"Enter  price"}
                            />
                        </Grid>
                        <Grid item >
                            <CustomInput
                                id="quantity"
                                required
                                label="quantity"
                                size="small"
                                name="quantity"
                                error={error.quantity}
                                resetError={() => resetError("quantity")}
                                value={payload.quantity}
                                handleChange={handleChange}
                                inputProps={{
                                    maxLength: 30,
                                }}
                                helperText={error.quantity}
                                // validation={"alpha-numeric-ch-th"}
                                placeholder={"Enter  quantity"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Autocomplete
                        options={categories}
                        value={category || null}
                        onChange={(e, v) =>
                            setCategory(v)
                        }
                        getOptionLabel={(option) => option.categoryTitle || ''}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                        sx={{ width: 1100, paddingTop: "10px" }}
                    />
                </Grid>
            </Grid>
            <Grid>
                <Button onClick={() => handleSave()}>Submit</Button>
            </Grid>
        </MainContent>
    );
}
export default AddProduct;