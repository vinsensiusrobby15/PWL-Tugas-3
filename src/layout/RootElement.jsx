import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Toaster } from "react-hot-toast";

const RootElement = () => {
    return (
        <>
        <Toaster />
        <NavBar />
        <Outlet />
        </>
    )
}

export default RootElement;