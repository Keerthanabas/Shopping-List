import React from 'react';


const ShoppingList = (props)=>{
    return(
        <div>
        <li>{props.text}</li>  <button onClick={()=>props.deleteItem(props.id)}>*</button>
        </div>
    )
}
export default ShoppingList