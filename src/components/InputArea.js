import React, { useState } from "react";


const InputArea = () => {
    const [inputText,setInputText] = useState("")

    const handleChange = (event) =>{
        setInputText(event.target.value)
    }
    return (
        <div>
            <h2>Items To Buy</h2>
            <input type="text" placeholder="Add new item" onChange={handleChange} value={inputText}></input>
            <button>Add</button>
        </div>


    )
}
export default InputArea