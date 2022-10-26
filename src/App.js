
import React from "react";
import Login from "./Components/Login";
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Colors from "./Components/Colors";
import Borders from "./Components/Borders";
import Animation from "./Components/Animation";
import Others from "./Components/Others";
import Register from "./Components/Register";
import ForgotPassword from "./Components/Forgot-Password";
import Error from "./Components/Error";
import Blank from "./Components/Blank";
import Charts from "./Components/Charts";
import Tables from "./Components/Tables";
function App() {
    return (

        <div style={{backgroundColor:'lightgray'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<DashBoard/>}></Route>
            <Route path='/button' element={<Buttons/>}></Route>
            <Route path='/cards' element={<Cards/>}></Route>
            <Route path='/colors' element={<Colors/>}></Route>
            <Route path='/borders' element={<Borders/>}></Route>
            <Route path='/animation' element={<Animation/>}></Route>
            <Route path='/others' element={<Others/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
            <Route path='/404' element={<Error/>}></Route>
            <Route path='/blank' element={<Blank/>}></Route>
            <Route path='/charts' element={<Charts/>}></Route>
            <Route path='/tables' element={<Tables/>}></Route>
          </Routes>
        </BrowserRouter>
        
        </div>

    );
}

export default App;
