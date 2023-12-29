import React from 'react';


const ShoppingList = (props)=>{
    return(
        <div>
        <li>{props.text}</li> <button onClick={()=>props.deleteItem(props.id)}> 
        <span class="material-symbols-outlined"> Cancel</span> 
          </button>
        </div>
    )
}
export default ShoppingList