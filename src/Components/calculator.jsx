import React, { useState } from "react";

function Calculator() {
    
    return (
        <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col">
            <div className="flex flex-row justify-between w-80 border-zinc-900 border-b-2">
                <h1 className="text-5xl font-bold my-auto pt-1 text-cyan-950">calc</h1>
                <input type="text" name="inputResult" id="inputResult"  className="bg-sky-100 text-right text-align-last-right max-w-xs text-5xl font-bold py-0 h-auto w-52 box-sizing-content text-blue-800"/>
            </div>
            <div className="bg-cyan-950 w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg">
                    <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
                        <button className="operator">AC</button>
                        <button className="operator">DE</button>
                        <button id="." className="operator">.</button>
                        <button id="/" className="operator">/</button>
                        <button id="7" className="number">7</button>
                        <button id="8" className="number">8</button>
                        <button id="9" className="number">9</button>
                        <button id="*" className="operator">*</button>
                        <button id="4" className="number">4</button>
                        <button id="5" className="number">5</button>
                        <button id="6" className="number">6</button>
                        <button id="-" className="operator">-</button>
                        <button id="1" className="number">1</button>
                        <button id="2" className="number">2</button>
                        <button id="3" className="number">3</button>
                        <button id="+" className="operator">+</button>
                        <button id="00" className="number">00</button>
                        <button id="0" className="number">0</button>
                        <button id="=" className="operator col-span-2">=</button>
                    </div>
            </div>
        </div>
    )
}

export default Calculator