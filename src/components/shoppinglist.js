import React from 'react';


const ShoppingList = (props)=>{
    return(
        <div>
        <li className="list">{props.text}</li> 
        {/* <button onClick={()=>props.deleteItem(props.id)}> </button> */}
        <span class="material-symbols-outlined" onClick={()=>props.deleteItem(props.id)}> Cancel</span> 
        </div>
    )
}
export default ShoppingList