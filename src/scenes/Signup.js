import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../ConnectAuth'

export default function Signup({setUser}){
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
    const navigate = useNavigate()
    
    const handleFormSubmit = (e) =>{
        e.preventDefault();
       const auth = getAuth(app);
       createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            //set user
            setUser(result.user)
          //navigate to home
          navigate('/')
        })
        .catch(alert)
    }

    return (
 <>
    <h1>Signup</h1>
    <hr />
    <form onSubmit={handleFormSubmit}>
        <label>Email: <input type="email" value={email} 
        onChange={e=>setEmail(e.target.value)}/>
        </label>
        <br/>
        <label>Password:
             <input type="password" value={password}
             onChange={e =>setPassword(e.target.value)}/>
             </label>
        <br />
        <input type="submit" value="Sign up"/>
    </form>
    <p>Already a User?< Link to ="login">Login</Link></p>
    </>
    )
}


//<hr/> means horizontal rule

