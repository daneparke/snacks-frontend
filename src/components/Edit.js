import React from 'react'
import { Link } from 'react-router-dom'


const Edit = (props) => {
    return (
        <>
            <div>
                <button><Link to='/movies'>Lets See The Movies</Link></button>
                {/* <button className={`${props.showHomeButton ? '' : 'hidden'}`} onClick={props.homeButton}>Lets See The Movies!</button> */}
            </div>
        </>
    )
}
export default Edit