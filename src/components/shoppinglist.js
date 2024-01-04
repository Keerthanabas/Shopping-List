import React from 'react';



const ShoppingList = (props)=>{
    return(
        <div>
        <li>{props.text}  
        {/* <span class="material-symbols-outlined" onClick={()=>props.deleteItem(props.id)}> Cancel </span> */}
        <button className="button" onClick={()=>props.deleteItem(props.id)}> X </button>
        </li>
        </div>
    )
}
export default ShoppingList