import React,{useState} from 'react'
import './Login.css'
import { Link,BrowserRouter as Router,Switch,Route, Redirect } from 'react-router-dom';

const Login = () => {
  const[user,changeUser]=useState("");
  const[pass,changepass]=useState("");
  const[value,changevalue]=useState(false)
  if(value){
    return <Redirect to='./Shoping'/>
  }
  const handler= e =>{
    changeUser(e.target.value)
  }
  const handlers= e =>{
    changepass(e.target.value)
  }
  const submitHandler= e =>{
    e.preventDefault();
    console.log(user,pass);
  }
  return (
    <div className='llogin'>  
      <h2>LOGIN FORM</h2>
      <form onSubmit={submitHandler} className="container">
        <div className="container">
          NAME:<input type="text" name="username" placeholder="Entername" value={user}
          onChange={handler}
          /><br/>
          PASSWORD:<input type="password" name="password" placeholder="password" value={pass}
          onChange={handlers}
          />
        </div><br/>
        <button type="submit" onClick={()=>changevalue(true)}>Login</button>
      </form>
    </div>
  )
}

export default Login