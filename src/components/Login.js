import React from 'react'
import { Link } from 'react-router-dom'


const Login = (props) => {
    return (
        <>
            <div className='col-5 loginForm'>
                <h3><b>Welcome</b></h3>
                <label>Username</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='Desired Username' name='username' />
                <label>Password</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='******' name='password' />
                <Link to={`${props.allInputted ? '/home' : '/'}`}> <button onClick={props.addMovie} type="submit" className="btn btn-dark">Existing User</button></Link>
                <Link to={`${props.allInputted ? '/home' : '/'}`}> <button onClick={props.addMovie} type="submit" className="btn btn-dark">Sign Up</button></Link>
            </div>
        </>
    )
}
export default Login