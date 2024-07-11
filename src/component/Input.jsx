import React from 'react';
function Input(props){
  const InputChange=(e)=>{
    props.um(e.target.value)
  }
  const add=()=>{
    props.setResult(props.result+Number(props.num))
  }
  const sub=()=>{
     props.setResult(props.result-Number(props.num))
  }
  return(
    <div>
        <p>Enter a value to add/subtract</p>
        <input type="number" placeholder="Enter a number" onChange={InputChange} id="input"/> <br/>
        <button onClick={add} className="add">Add</button> <br/>
        <button onClick={sub} className="sub">Subtract</button> 
     </div>
  )
}
export default Input;