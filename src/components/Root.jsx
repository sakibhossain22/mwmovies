import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;