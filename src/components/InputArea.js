import React, { useState } from "react";


const InputArea = (props) => {
    const [inputText,setInputText] = useState("")
    
    const handleChange = (event) =>{
        setInputText(event.target.value)
    }
    return (
        <div>
            <h2>Items To Buy</h2>
            <input type="text" placeholder="Add new item" onChange={handleChange} value={inputText}></input>
            <button className="add" onClick={()=>{
                props.additems(inputText);
                setInputText("");
                }}>Add</button>
                
        </div>
    )
}
export default InputArea