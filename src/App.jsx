import React,{useState} from 'react';
import './App.css';
import Input from './component/Input';
import Output from './component/Output';
function App() {
  const [num,setNum]=useState(0);
  const [result,setResult]=useState(0);
  console.log(num)
  return (
    <div>
       <Input um={setNum} num={num} setResult={setResult} result={result}/>
       <Output result={result}/>
    </div>
  );
}

export default App;