import React from "react";

import "./preloader.css";


export default function Preloader() {

    return (
        <div className="preloader">
            <div className="parent">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );

}
