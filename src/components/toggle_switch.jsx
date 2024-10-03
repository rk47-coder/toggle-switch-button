import React from "react";
import { useState } from "react";

function ToggleSwitch() {
    const [checked, setChecked] = useState({
        btn1: 'off',
        btn2: 'off'
    });

    function handleClick(btn) {
        setChecked(prevState => ({
            ...prevState,
            [btn]: prevState[btn] === "off" ? "on" : "off"
        }));
    }

    return (
        <div className="toggle-container">
            <div className="toggle-grid">
                <div className="toggle-group">
                    <p className="text1">{checked.btn1}</p>
                    <label className="switch">
                        <input type="checkbox" onClick={() => handleClick('btn1')} />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="toggle-group">
                    <p className="text1">{checked.btn2}</p>
                    <label className="switch">
                        <input type="checkbox" onClick={() => handleClick('btn2')} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ToggleSwitch;
