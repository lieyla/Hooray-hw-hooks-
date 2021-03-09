import {useState, useEffect} from 'react'
import './main.css'
function Honda (props){
    const[count1, hondaCount]=useState(15000);

useEffect(()=> {

})

return(
<div className="main">
    <h1>Honda</h1>
    <h1> {count1}</h1>
    <button onClick={() =>hondaCount(count1+1)}><h1>+</h1></button>
    <button onClick={() =>hondaCount(count1-1)}><h1>-</h1></button>
    <button onClick={() =>hondaCount(10000)}><h1>Reset</h1></button>

</div>
    
);
}
export default Honda;

