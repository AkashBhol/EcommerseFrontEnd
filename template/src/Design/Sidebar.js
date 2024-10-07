// import { Button, Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
// import { useState } from "react";
// import AddHomeIcon from '@mui/icons-material/AddHome';
// import UpdatePassword from "../Pages/UpdatePassword";
// import PasswordIcon from '@mui/icons-material/Password';
// import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';
// import { useNavigate } from "react-router-dom";
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


// const Sidebar = () => {
//     const [openUpdate, setOpenUpdate] = useState(false);
//     const [openLogout, setOpenLogout] = useState(false);

//     const handleUpdatePopUp = () => {
//         setOpenUpdate(true);
//     };

//     const handleUpdateClose = () => {
//         setOpenUpdate(false);
//     };

//     const handleLogoutPopUp = () => {
//         setOpenLogout(true);
//     };

//     const handleLogoutClose = () => {
//         setOpenLogout(false);
//     };

//     const [langAnchorEl, setLangAnchorEl] = useState(null);

//     const languageMenu = (event) => {
//         setLangAnchorEl(event.currentTarget);
//     };

//     const handleConfirmLogout = () => {
//         console.log("User logged out");
//         handleLogoutClose();
//         localStorage.clear();
//         window.location = "/";
//     };

//     return (
//         <>
//             <div className="sidebar">
//                 <header style={{ padding: "10px", backgroundColor: "#e0e0e0", textAlign: "center" }}>
//                     Sidebar
//                 </header>
//                 <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
//                     <li style={{ marginBottom: "15px" }}>
//                         <a href="/home" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
//                             <AddHomeIcon style={{ marginRight: "5px" }} /> User
//                         </a>
//                     </li>
//                     <li style={{ marginBottom: "15px" }}>
//                         <a href="/cate" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
//                             <ShoppingCartSharpIcon style={{ marginRight: "5px" }} /> Category
//                         </a>
//                         {/* <a href="/addacte" ></a>*/}
//                     </li>
//                     <li style={{ marginBottom: "15px" }}>
//                         <a href="/product" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
//                             <ProductIcon style={{ marginRight: "5px" }} /> Product
//                         </a>
//                     </li>
//                     <li style={{ marginBottom: "15px" }}>
//                         <Button onClick={handleUpdatePopUp} style={{ display: "flex", alignItems: "center" }}>
//                             <PasswordIcon style={{ marginRight: "5px" }} /> Update Password
//                         </Button>
//                     </li>
//                     {/*<li style={{ marginBottom: "15px" }}>
//                         <Button onClick={(event) => languageMenu(event)} style={{ display: "flex", alignItems: "center" }}>
//                             <PasswordIcon style={{ marginRight: "5px" }} /> Language
//                         </Button>
//                     </li>*/}
//                     <li>
//                         <Button onClick={handleLogoutPopUp} color="secondary" style={{ display: "flex", alignItems: "center" }}>
//                             <AddHomeIcon style={{ marginRight: "5px" }} /> Logout
//                         </Button>
//                     </li>
//                 </ul>
//             </div>


//             <Dialog open={openUpdate} onClose={handleUpdateClose}>
//                 <DialogContent>
//                     <UpdatePassword open={openUpdate} setOpen={setOpenUpdate} />
//                 </DialogContent>
//             </Dialog>

//             <Dialog open={openLogout} onClose={handleLogoutClose}>
//                 <DialogTitle>Logout Confirmation</DialogTitle>
//                 <DialogContent>
//                     Are you sure you want to log out?
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={handleLogoutClose} color="primary">Cancel</Button>
//                     <Button onClick={() => handleConfirmLogout()} color="secondary">Logout</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// };

// export default Sidebar;
import { Button, Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import AddHomeIcon from '@mui/icons-material/AddHome';
import UpdatePassword from "../Pages/UpdatePassword";
import PasswordIcon from '@mui/icons-material/Password';
import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const Sidebar = () => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);

    const handleUpdatePopUp = () => {
        setOpenUpdate(true);
    };

    const handleUpdateClose = () => {
        setOpenUpdate(false);
    };

    const handleLogoutPopUp = () => {
        setOpenLogout(true);
    };

    const handleLogoutClose = () => {
        setOpenLogout(false);
    };

    const handleConfirmLogout = () => {
        console.log("User logged out");
        handleLogoutClose();
        localStorage.clear();
        window.location = "/";
    };

    return (
        <>
            <div className="sidebar">
                <header style={{ padding: "10px", backgroundColor: "#e0e0e0", textAlign: "center" }}>
                    Sidebar
                </header>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
                    <li style={{ marginBottom: "15px" }}>
                        <a href="/home" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                            <AddHomeIcon style={{ marginRight: "5px" }} /> User
                        </a>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                        <a href="/cate" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                            <ShoppingCartSharpIcon style={{ marginRight: "5px" }} /> Category
                        </a>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                        <a href="/product" style={{ textDecoration: "none", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center" }}>
                            <ProductIcon style={{ marginRight: "5px" }} /> Product
                        </a>
                    </li>
                </ul>

                {/* Adding gap between top and bottom sections */}
                <div style={{ margin: "120px 0" }}></div>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
                    <li style={{ marginBottom: "15px" }}>
                        <Button onClick={handleUpdatePopUp} style={{ display: "flex", alignItems: "center" }}>
                            <PasswordIcon style={{ marginRight: "5px" }} /> Update Password
                        </Button>
                    </li>
                    <li style={{ marginBottom: "15px" }}>
                        <Button onClick={handleLogoutPopUp} color="secondary" style={{ display: "flex", alignItems: "center" }}>
                            <AddHomeIcon style={{ marginRight: "5px" }} /> Logout
                        </Button>
                    </li>
                </ul>
            </div>

            <Dialog open={openUpdate} onClose={handleUpdateClose}>
                <DialogContent>
                    <UpdatePassword open={openUpdate} setOpen={setOpenUpdate} />
                </DialogContent>
            </Dialog>

            <Dialog open={openLogout} onClose={handleLogoutClose}>
                <DialogTitle>Logout Confirmation</DialogTitle>
                <DialogContent>
                    Are you sure you want to log out?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogoutClose} color="primary">Cancel</Button>
                    <Button onClick={handleConfirmLogout} color="secondary">Logout</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Sidebar;
