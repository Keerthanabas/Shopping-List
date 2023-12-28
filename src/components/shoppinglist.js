import React from 'react';
//import '@mui/icons-material/Cancel';

const ShoppingList = (props)=>{
    return(
        <div>
        <li>{props.text}</li> <button onClick={()=>props.deleteItem(props.id)}> Cancel </button>
        </div>
    )
}
export default ShoppingList