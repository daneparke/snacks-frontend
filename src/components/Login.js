import React from 'react'
import { Link } from 'react-router-dom'


const Login = (props) => {
    return (
        <>
            <div className='col-5 loginForm'>
                <h3><b>Welcome</b></h3>
                <img alt='snacks logo' src='/snacks_logo.png'></img>
                <label>First Name</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='Mike' name='firstName' />
                <label>Last Name</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='Jones' name='lastName' />
                <label>Email</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='your@email.com' name='email' />
                <label>Password</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='******' name='password' />
                {/* <Link to={`${props.allInputted ? '/home' : '/'}`}> <button onClick={props.addUser} type="submit" className="btn btn-dark">Existing User</button></Link> */}
                {/* <Link to={`${props.allInputted ? '/home' : '/'}`}> <button onClick={props.addUser} type="submit" className="btn btn-dark">Sign Up</button></Link> */}
                <Link to='/home'> <button type="submit" className="btn btn-dark">Sign Up</button></Link>

            </div>
        </>
    )
}
export default Login