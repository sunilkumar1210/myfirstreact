import React,{useState} from 'react'
import img1 from './images/book2.jpg'
import img2 from './images/book1.jpg'
import './Shoping.css'

const Shoping = () => {
    let ans=0
    let[value1,setvalue1]=useState(0)
    let[value2,setvalue2]=useState(0)
    let[value3,setvalue3]=useState(0)
    if(value1<0)
    {value1=0}
    if(value2<0)
    {value2=0}
    if(value3<0)
    {value3=0}
    return (
        <div className='container1'>
            <button id="total"><h1>{value1+value2+value3}:Items Added</h1></button>
                <table>
                    <tr>  
                        <td/>1      
                        <td/><img src={img1} alt='no image' height='70px' width='70px'/>
                        <td/><p/>JACK AND JONES
                        <td/><button onClick={()=>setvalue1(value1+1)}>+</button>
                        <td/><h1>{value1}</h1>
                        <td/><button onClick={()=>setvalue1(value1-1)}>-</button>
                        <td/>20$
                    </tr>
                    <tr>    
                        <td/>2
                        <td/><img src={img2} alt="no img" width="100px" height="70px"/>
                        <td/><p/>RICH DAD POOR DAD
                        <td/><button onClick={()=>setvalue2(value2+1)}>+</button>
                        <td/><h1>{value2}</h1>
                        <td/><button onClick={()=>setvalue2(value2-1)}>-</button>
                        <td/>25$
                    </tr>
                    <tr>      
                        <td/>3  
                        <td/><img src={img1} alt='no image' height='70px' width='70px'/>
                        <td/><p/>BEN 10
                        <td/><button onClick={()=>setvalue3(value3+1)}>+</button>
                        <td/><h1>{value3}</h1>
                        <td/><button onClick={()=>setvalue3(value3-1)}>-</button>
                        <td/>25$
                    </tr>
                </table>
            <center><button onClick={()=>alert(value1+value2+value3 + " "+"items added")}>ADD TO CART</button></center>
            
            <div className='amount'>
            <h1>Billing Amount</h1>
                <table>
                        <tr>
                            <th/><h3/>Book
                            <th/>Quantity
                            <th/><h3/>Amount
                        </tr>
                        <tr>
                            <td/><h3/>JACK AND JONES
                            <td/>{value1}
                            <td/>{value1*20}
                        </tr>
                        <tr>
                            <td/><h3/>RICH DAD POOR DAD
                            <td/>{value2}
                            <td/>{value2*25}
                        </tr>
                        <tr>
                            <td/><h3/>BEN 10
                            <td/>{value3}
                            <td/>{value3*25}
                        </tr>
                        <tr>
                            <td/><hr/>
                            <td/><hr/>
                            <td/><hr/>
                        </tr>
                        <tr>
                            <td/><b/>Total Amount
                            <td/>{value1+value2+value3}
                            <td/>{(value1*20)+(value2*25)+(value3*25)}
                        </tr>
                </table>
            </div>
            </div>
          )
}

export default Shoping