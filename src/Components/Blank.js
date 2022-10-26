import React from 'react';
import SideBar from './SideBar';
import Topbar from './Topbar';

function Blank(){
    return(
        <>
        <div id='wrapper'>
        <SideBar/>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id='content'>
            <Topbar/>
            {/* <!-- Begin Page Content --> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

                </div>
                {/* <!-- /.container-fluid --> */}
            </div>

        </div>
    </div>
        
        </>
    )
}

export default Blank;