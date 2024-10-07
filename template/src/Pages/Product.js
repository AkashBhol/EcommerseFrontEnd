import { Avatar, Box, Button } from "@mui/material";
import MainContent from "../Design/MainContent";
import DataTable from "../Validation/DataTable";
import { useEffect, useState } from "react";
import { getAllProduct } from "../Service/ProductService";
import { useTranslation } from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const Product = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [payload, setPayload] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(8);
    const [rowCount, setRowCount] = useState(0);

    useEffect(() => {
        loadData(page, pageSize);
    }, [page, pageSize]);

    const loadData = (page, pageSize) => {
        getAllProduct(page, pageSize).then((res) => {
            if (res?.data) {
                setPayload(res.data.objects);
                setRowCount(res.data.totalCount);
            }
        }).catch((error) => {
            const status = error?.response?.status;
            if (status === 401) {
                window.location = "/";
            }
        })

    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(0);
    };


    const handleAdd = () => {
        navigate("/addProduct")
    }

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "image", headerName: "Image", flex: 1,
            renderCell: (params) => (
                <Avatar
                    sx={{ bgcolor: "#C0C0C0", marginRight: "8px" }}
                    imgProps={{ draggable: "false" }}
                    alt={params.row.productName}
                    src={params.row.image}
                />
            ),
        },
        { field: "productName", headerName: "productName", flex: 1 },
        { field: "productDescription", headerName: "productDescription", flex: 1, editable: true },
        { field: "price", headerName: "price", flex: 1, editable: true },
        { field: "quantity", headerName: "quantity", flex: 1, editable: true },
    ];

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("User Product", 14, 16);

        const tableColumn = ["id", "productName", "productDescription", "price", "quantity"];

        const tableRows = payload.map(product => [
            product.id,
            product.productName,
            product.productDescription,
            product.price,
            product.quantity
        ])

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 20,
            theme: "grid",
        })
        doc.save("product_records.pdf")
    }

    return (
        <MainContent title={"Product"}>
            <Box display="flex" justifyContent="flex-end" mb={2}> {/* Flex container for alignment */}
                <Button variant="contained" onClick={generatePDF} style={{ display: "flex" }}>
                    Download PDF
                </Button>
            </Box>
            <Box sx={{ height: 400, width: '100%' }}>
                <Button onClick={() => handleAdd()}><AddIcon /></Button>
                <DataTable
                    rows={payload}
                    columns={columns}
                    page={page}
                    totalRecords={rowCount}
                    rowsPerPage={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    onSelection={() => console.log("")}
                />
            </Box>
        </MainContent>
    );
};

export default Product;
