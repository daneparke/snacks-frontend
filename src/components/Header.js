import React from 'react'
import { Link } from 'react-router-dom'
import snacksLogo from '../snacks_logo.png'


const Header = (props) => {
    return (
        <header className='row col-12'>
            <img className='col-5 snacksLogo' alt='snacks logo' src={snacksLogo}></img>
            <div className='userHeader col-7'>
                <p className='userLabel'><b>User:</b></p>
                <p className='userName'><b>{props.currentUser.first_name} {props.currentUser.last_name}</b></p>
            </div>
            <div className='row'>
                <div className={`col-12 signInButtons ${props.signUpInputted || props.existingUserInputted || props.adminSelected ? 'hidden' : ''}`}>
                    <Link to='/' ><button onClick={props.existingClick}>Login</button></Link>
                    <Link to='/' ><button onClick={props.signUpClick}>Sign Up</button></Link>
                </div>
                <div className={`signInButtons ${props.currentUser.admin ? '' : 'hidden'}`}>
                    <Link to='/admin' ><button>Admin: Snack Page</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header
