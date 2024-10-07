import axios from "axios";
import { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import MainContent from "../Design/MainContent";
import DataTable from "../Validation/DataTable";
import { useNavigate } from "react-router-dom";
import { getAllUser } from "../Service/UserService";
import { jsPDF } from "jspdf"; // Correct import for jsPDF
import autoTable from "jspdf-autotable";
// import DataTable from "../Components/DataTable";

const Home = () => {
    const [payload, setPayload] = useState([]);
    const navigate = useNavigate();
    //for pagination
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(8);
    const [rowCount, setRowCount] = useState(0);
    const [filters, setFilters] = useState({
        pagNumber: 0,
        pageSize: 8
    })

    const defaultFilters = {
        pagNumber: 0,
        pageSize: 8
    }

    const handlePageChange = (e) => {
        setPage(e)
    }
    const handlePageSize = (e) => {
        setFilters({
            ...defaultFilters,
            pagNumber: defaultFilters.pagNumber,
            pageSize: e,
        })
    }
    const [error, setError] = useState({
        email: "",
        password: "",
        name: "",
        about: ""
    })

    useEffect(() => {
        loadData(page, pageSize);
    }, [page, pageSize])

    const loadData = (page, pageSize) => {
        getAllUser(page, pageSize).then((res) => {
            setPayload(res?.data?.objects)
            setRowCount(res?.data?.totalCount);
        }).catch((error) => {
            const status = error?.response?.data;
            if (status === 401) {
                window.location = "/";
            }
        })
    }

    const columns = [{ field: "id", headerName: "id", width: 90 },
    { field: "name", headerName: "name", width: 150, editable: true },
    { field: "email", headerName: "email", width: 150, editable: true },
    { field: "password", headerName: "password", width: 150, editable: true }]

    const getId = row => row.id;
    const handleAdd = () => {
        // navigate("/addHome")
    }

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text("User Records", 14, 16); // Title of the PDF

        const tableColumn = ["ID", "Name", "Email", "Password"];
        const tableRows = payload.map(user => [user.id, user.name, user.email, user.password]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 20,
            theme: "grid",
        });

        doc.save("user_records.pdf"); // Name of the downloaded PDF
    };

    return (
        <MainContent title={"USER"}>
            <Box display="flex" justifyContent="flex-end" mb={2}> {/* Flex container for alignment */}
                <Button variant="contained" onClick={generatePDF} style={{ display: "flex" }}>
                    Download PDF
                </Button>
            </Box>
            <Button onClick={handleAdd}></Button>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataTable
                    rows={payload}
                    columns={columns}
                    page={page}
                    totalRecords={rowCount}
                    rowsPerPage={pageSize}
                    onPageChange={(pn) => handlePageChange(pn)}
                    onPageSizeChange={(ps) => handlePageSize(ps)}
                    onSelection={() => console.log("")}
                >
                </DataTable>
            </Box>
        </MainContent>
    )
}
export default Home;