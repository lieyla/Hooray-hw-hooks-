import {useState, useEffect} from 'react'
import './main.css'
function Toyota (props){
    const[count1, newCount]=useState(15000);

useEffect(()=> {

})

return(
<div className="main">
    <h1>Toyota</h1>
    <h1> {count1}</h1>
    <button onClick={() =>newCount(count1+1)}><h1>+</h1></button>
    <button onClick={() =>newCount(count1-1)}><h1>-</h1></button>
    <button onClick={() =>newCount(15000)}><h1>Reset</h1></button>

</div>
    
);
}
export default Toyota;

