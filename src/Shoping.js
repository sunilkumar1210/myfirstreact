import React,{useState} from 'react'
import img1 from './images/bookimg.jpg'
import './Shoping.css'

const Shoping = () => {
    let[value1,setvalue1]=useState(0)
    let[value2,setvalue2]=useState(0)
    if(value1<0)
    {value1=0}
    if(value2<0)
    {value2=0}
    
    return (
        <div className='container1'>
            <button id="total"><h1>{value1+value2}:Items Added</h1></button>
            <img src={img1} alt='no image' height='100px' width='100px'/><br/>
            <button onClick={()=>setvalue1(value1+1)}>+</button>
            <h1>{value1}</h1>
            <button onClick={()=>setvalue1(value1-1)}>-</button><br/>
            <img src={img1} alt="no img" width="100px" height="100px"/><br/>
            <button onClick={()=>setvalue2(value2+1)}>+</button>
            <h1>{value2}</h1>
            <button onClick={()=>setvalue2(value2-1)}>-</button>
            <center><button onClick={()=>alert(value1+value2+" "+"items added to cart")}>Add to cart</button></center>
        </div>
    )
}

export default Shoping
