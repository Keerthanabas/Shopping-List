import React from 'react';



const ShoppingList = (props)=>{
    return(
        <div>
        <li>{props.text}</li>  
        <span class="material-symbols-outlined" onClick={()=>props.deleteItem(props.id)}> Cancel </span>
        {/* <button onClick={()=>props.deleteItem(props.id)}> </button> */}
         
        </div>
    )
}
export default ShoppingList