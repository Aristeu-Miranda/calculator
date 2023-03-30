import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState("");
    const clickKeys = (e) => {
        setResult(result.concat(e.target.id))
    }
    const clear = () => {
        setResult("")
    }
    const delElement = () => {
        setResult(result.slice(0, -1))
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("[ERROR]")
        }
    }
    
    const inputStyle = "bg-sky-100 text-right text-align-last-right max-w-xs text-5xl font-bold py-0 h-auto w-52 box-sizing-content text-blue-800"
    return (
        <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col">
            <div className="flex flex-row justify-between w-80 border-zinc-900 border-b-2">
                <h1 className="text-5xl font-bold my-auto pt-1 text-cyan-950">calc</h1>
                <input type="text" name="inputResult" id="inputResult"  className={inputStyle} value={result} disabled/>
            </div>
            <div className="bg-cyan-950 w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg">
                    <div className="grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
                        <button className="operator" onClick={clear}>AC</button>
                        <button className="operator" onClick={delElement}>DE</button>
                        <button id="." className="operator" onClick={clickKeys}>.</button>
                        <button id="/" className="operator" onClick={clickKeys}>/</button>
                        <button id="7" className="number" onClick={clickKeys}>7</button>
                        <button id="8" className="number" onClick={clickKeys}>8</button>
                        <button id="9" className="number" onClick={clickKeys}>9</button>
                        <button id="*" className="operator" onClick={clickKeys}>*</button>
                        <button id="4" className="number" onClick={clickKeys}>4</button>
                        <button id="5" className="number" onClick={clickKeys}>5</button>
                        <button id="6" className="number" onClick={clickKeys}>6</button>
                        <button id="-" className="operator" onClick={clickKeys}>-</button>
                        <button id="1" className="number" onClick={clickKeys}>1</button>
                        <button id="2" className="number" onClick={clickKeys}>2</button>
                        <button id="3" className="number" onClick={clickKeys}>3</button>
                        <button id="+" className="operator" onClick={clickKeys}>+</button>
                        <button id="00" className="number" onClick={clickKeys}>00</button>
                        <button id="0" className="number" onClick={clickKeys}>0</button>
                        <button id="=" className="operator col-span-2" onClick={calculate}>=</button>
                    </div>
            </div>
        </div>
    )
}

export default Calculator