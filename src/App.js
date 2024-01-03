import { useState } from 'react';
import './App.css';
import InputArea from "./components/InputArea"
import ShoppingList from "./components/shoppinglist"



function App() {

  const [items,setItems] = useState ([])
   const addItems = (inputText) =>{
    setItems((prevItems) => {
      return [...prevItems,inputText]
})
}
const deleteItem = (id)=>{
  setItems((prevItems)=>{
    return prevItems.filter((item,index)=>{
      return index !== id;
    });
  });
}
console.log(items)
  
  return (
    <div>
    <h1>Project:3 Shopping List</h1>
     <InputArea additems = {addItems}/>
    <div>
      <ul>
        {items.map((item,index)=>{
          return <ShoppingList key={index} text={item} deleteItem={deleteItem} id={index}/> 
        })}
        </ul>
        </div>
    </div>
 );
}
export default App;
