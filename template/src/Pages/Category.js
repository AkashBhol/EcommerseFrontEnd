import { Box, Button } from "@mui/material";
import MainContent from "../Design/MainContent";
import DataTable from "../Validation/DataTable";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { getAllCategory } from "../Service/CategoryService";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Category = () => {
    const [payload, setPayload] = useState([]);

    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/addacte")
    }


    //pagination
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(8);
    const [rowCount, setRowCount] = useState(0);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setPage(0);
    }

    useEffect(() => {
        loadData(page, pageSize);
    }, [page, pageSize]);

    const loadData = () => {
        getAllCategory(page, pageSize).then((res) => {
            setPayload(res?.data?.data?.objects);
            setRowCount(res?.data?.data?.totalCount);

        }).catch((error) => {
            const status = error?.response?.status;
            if (status === 401) {
                window.location = "/";
            }
        })
    }

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "categoryTitle", headerName: "categoryTitle" }
    ]


    //downloading pdf
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("User CAtegory", 14, 16);

        const tableColumn = ["id", "categoryTitle"];
        const tableRows = payload.map(Category => [Category.id, Category.categoryTitle]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 20,
            theme: "grid",
        });
        doc.save("category_records.pdf")
    }

    return (
        <MainContent title={Category}>
            <Box display="flex" justifyContent="flex-end" mb={2}> {/* Flex container for alignment */}
                <Button variant="contained" onClick={generatePDF} style={{ display: "flex" }}>
                    Download PDF
                </Button>
            </Box>
            <Box sx={{
                height: 400, width: '100%'
            }}>
                <Button onClick={() => handleAdd()}>Add</Button>
                <DataTable
                    rows={payload}
                    columns={columns}
                    page={page}
                    totalRecords={rowCount}
                    rowsPerPage={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    onSelection={() => console.log("")}
                >
                </DataTable>
            </Box>
        </MainContent>
    );
};
export default Category;