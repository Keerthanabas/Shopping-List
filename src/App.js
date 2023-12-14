import { useState } from 'react';
import './App.css';
import InputArea from "./components/InputArea"

function App() {

  const [items,setItems] = useState ([])

  const addItems = (inputText) =>{
    setItems((prevItems) => {
      return [...prevItems,inputText]
})
}
  
  return (
    <div className="App">
    <h1>Project:3 Shopping List</h1>
    <InputArea additems = {addItems}/>
 </div>
  );
}
export default App;
