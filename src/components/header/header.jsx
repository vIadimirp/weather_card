import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../svgs/searchIcon";

import "./header.css";


export default function Header({setCurrentCity, isIncorrect}) {

    const [inputText, setInputText] = useState("");


    const ref = useRef(null);


    useEffect(() => {
        ref.current.focus();
    }, []);


    const onInputChange = (e) => {
        setInputText(e.target.value);
        if (e.key === "Enter") setCurrentCity(inputText);
        console.log(e);
    }


    return (
        <div className="header">
            <div className="header__input">
                <input ref={ref} placeholder="City or country..." type="text" onKeyDown={onInputChange} autoFocus />
            </div>
            <div className="header__search-btn">
                <button onClick={() => setCurrentCity(inputText)}>
                    <SearchIcon />
                </button>
            </div>
            <div className={`incorrect${isIncorrect ? " active" : ""}`}>Incorrect city or country</div>
        </div>
    );

}
