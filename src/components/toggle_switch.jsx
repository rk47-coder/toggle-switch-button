import React from "react";
import { useState } from "react";



function ToggleSwitch (){   
    const [checked, setChecked] = useState({
        btn1: 'off',
        btn2: 'off'
    });
    
    function OnClick(btn){
        setChecked(prevState => {
            const newState = {
                ...prevState,
                [btn]: prevState[btn] === "off" ? "on" : "off"
            }
            return newState
        })
    }
    return(
        <div>
            <label class="switch">
                <p className="text1">{checked.btn1}</p>
                <input  type="checkbox" onClick={OnClick('btn1')}></input>
                <span class="slider round"></span>
                </label>

                <label class="switch">
                <p className="text1">{checked.btn2}</p>
                <input type="checkbox" onClick={OnClick('btn2')}></input>
                <span class="slider round"></span>
                </label>
        </div>
    )

}

export default ToggleSwitch;