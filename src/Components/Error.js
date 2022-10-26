import React from "react";
import SideBar from "./SideBar";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

function Error() {
    return (
        <>
        <div id='wrapper'>
            <SideBar/>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id='container'>
                <Topbar/>
                {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- 404 Error Text --> */}
                    <div class="text-center">
                        <div class="error mx-auto" data-text="404">404</div>
                        <p class="lead text-gray-800 mb-5">Page Not Found</p>
                        <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                        <Link to="/dashboard">&larr; Back to Dashboard</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
               
        </>
    )
}
export default Error;