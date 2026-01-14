import React, {useState} from "react";
const App = () => {
  const [ name,setName] = useState("");
       //Form data submission handler function
        function handleSubmit(e){
          //prevents reloading of the page on submit
          e.preventDefault();
          console.log(name);
        }
  return (
        <div>
          <h1>Form-demo</h1>
          <h2>You Entered : {name}</h2>
         <form onSubmit={handleSubmit}> 
          <label>Name</label>
          <input onChange = {(e) => setName(e.target.value)} value = {name} type="text"/>
          <button>Submit</button>
         </form>
        </div>
)};
export default App;