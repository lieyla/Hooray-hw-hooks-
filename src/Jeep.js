import {useState, useEffect} from 'react'
import './main.css'
function Jeep (props){
const[count, setCount]=useState(20000);

useEffect(()=> {

})

return(
<div className="main">
    <h1>Jeep</h1>
    <h1> {count}</h1>
    <button onClick={() =>setCount(count+1)}><h1>+</h1></button>
    <button onClick={() =>setCount(count-1)}><h1>-</h1></button>
    <button onClick={() =>setCount(20000)}><h1>Reset</h1></button>

</div>
    
);
}
export default Jeep;

