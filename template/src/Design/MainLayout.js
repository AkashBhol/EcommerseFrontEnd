import { useState } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";


const MainLayout = () => {

    const path = window.location.pathname;
    // const path = useLocation();
    const showSideBar = path !== "/signIn" && path !== "/";

    return (
        <div className="main-layout">
            <MainContent />
            {showSideBar && <Sidebar />}
        </div>
    )
}
export default MainLayout;