import React, { useContext, useState } from 'react';
import "./Dash.css";
import ContextS from './Context/ContextS';
import {NavLink, Outlet} from "react-router-dom"
function Dash() {
   

    return (
        <>
            <div className="dash">
            <div className="left-d">
                <h1>DashBoard</h1>
                <div className="left-dash">
                    <NavLink to="Poster"><h3>Poster</h3></NavLink>
                    <NavLink to="News"><h3>News</h3></NavLink>
                </div>
            </div>
            <div className="right-d">
                <Outlet/>
            </div>
            </div>
        </>
    );
}

export default Dash;
