import React from 'react'
import { Link } from 'react-router-dom'


const Login = (props) => {
    return (
        <>
            <button className={`btn btn-dark ${props.showFirstButtons ? '' : 'hidden'}`} onClick={props.existingClick}>Existing User</button>
            <button className={`btn btn-dark ${props.showFirstButtons ? '' : 'hidden'}`} onClick={props.signUpClick}>Sign Up</button>
            <div className={`col-5 loginForm ${props.showSignUpInput ? '' : 'hidden'}`}>
                <label>First Name</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='Mike' name='firstName' />
                <label>Last Name</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='Jones' name='lastName' />
                <label>Email</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='your@email.com' name='email' />
                <label>Password</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='******' name='password' />
                <label className='checkbox-inline'><input onClick={props.checkAdmin} type='checkbox' />Admin ?</label>
                <Link to={`${props.adminSelected ? '/admin' : props.signUpInputted ? '/home' : '/'}`}> <button onClick={props.addUser} type='submit' className='btn btn-dark'>Sign Up</button></Link>
                <button onClick={props.existingClick} type='submit' className='btn btn-dark'>I Already Have An Account</button>
            </div>
            <div className={`col-5 loginForm ${props.showExistingInput ? '' : 'hidden'}`}>
                <label>Email</label>
                <input onChange={props.handleInput} className='loginInput' type='text' placeholder='your@email.com' name='email' />
                <label>Password</label>
                <input onChange={props.handleInput} className='loginInput' type='password' placeholder='******' name='password' />
                <Link to={`${props.existingUserInputted ? props.currentUser.admin ? '/admin' : '/home' : '/'}`}>
                    <button onClick={props.existingUser} className='btn btn-dark'>Login</button>
                </Link>
                <button className='btn btn-dark' onClick={props.signUpClick}>I Don't Have An Account</button>
                <div className={`invalidExistingUser ${props.invalidUser ? '' : 'hidden'}`}>Invalid Email or Password. Retry or Create New Account</div>
            </div>
        </>
    )
}
export default Login