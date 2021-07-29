import React, { useState } from "react";

export const Calculator = () => {
    const [inputValue1, setInputValue1] = useState(null)
    const [inputValue2, setInputValue2] = useState(null)
    const [result, setResult] = useState(0)

    let inputHandler = (e) => {
        if (e.target.name == "inputValue1") {
            setInputValue1(e.target.value)
        } else {
            setInputValue2(e.target.value)
        }
    }

    let onPlus = () => {
        setResult(parseInt(inputValue1) + parseInt(inputValue2))
    }

    let onMinus = () => {
        setResult(parseInt(inputValue1) - parseInt(inputValue2))
    }

    let onMult = () => {
        setResult(parseInt(inputValue1) * parseInt(inputValue2))
    }

    let onDivice = () => {
        setResult(parseInt(inputValue1) / parseInt(inputValue2))
    }

    return (
        <>
            <h1 style={{color: "white"}}>Calculator</h1>
            <hr />
            <input
                name="inputValue1"
                onChange={inputHandler}
                value={inputValue1}
                type="number"
                placeholder="Сан киргизиниз"
            />
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <button onClick={onMult}>*</button>
            <button onClick={onDivice}>/</button>
            <input
                name="inputValue2"
                onChange={inputHandler}
                value={inputValue2}
                type="number"
                placeholder="Сан киргизиниз"
            />
            <hr />
            <h3 style={{color: "white"}}>result: {result}</h3>

        </>
    )
}