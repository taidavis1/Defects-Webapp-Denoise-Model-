import React from 'react'

import "./Input.css"

function Input(){
        return (
            <section className="inputBox">
                <title> Wafer Defect Detection</title>
                <div className="inputs"/>
                    <h1> Base Image Inputs </h1>

                    <h2> Width Of Grid Lines</h2>
                    <div className="checkbox"/>
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div/>

                    <h2> Height Of Grid Lines</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <h2> Vertical Line Thickness</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <h2> Horizontal Line Thickness</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <br/>

                    <h1> Defect Inputs </h1>

                    <h2> Number of Spot Defects</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <h2> Number of Scratch Defects</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <h2> Number of Cloudy Defects</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />

                    <h2> Number of Radial Defects</h2>
                    <div className="checkbox" />
                        <input type="text" id="input-box" placeholder="Enter input"/>
                        <input type="checkbox" id="checkbox1" name="checkbox1" checked/>
                        <label for="checkbox1"> Random</label>
                    <div />



                <div/>
            </section > 

        );
}

export default Input;
