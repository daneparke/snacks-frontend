import React from 'react'
import { Link } from 'react-router-dom'


const Admin = (props) => {
    let snacks = props.snackList.map(snack => {
        return (
            <div key={`snack ${snack.id}`} className='container snackList'>
                <Link onClick={props.snackIDForReview} id={snack.id} to={`/snack/id/${snack.id}`}>
                    <div onClick={props.snackDetailsClick} key={`snack ${snack.id}`} id={snack.id}>
                        <img src={snack.image_url} alt={`${snack.name}`} className='snackImage'></img>
                        <div id={snack.id}>{snack.name}</div>
                        <div id={snack.id}>{snack.price}</div>
                        {/* <div className='col-2'>{snack.rating}</div> */}
                        {/* <button onClick={props.editMovieButton} id={movie.id} className='col-2'>Edit</button> */}
                        {/* <Link className='col-3' to='/edit'><button id={snack.id}>Edit</button></Link> */}
                    </div>
                </Link>
                <div className={`adminSnackButtonsCenter ${props.currentUser.admin ? '' : 'hidden'}`}>
                    <Link onClick={props.snackIDForReview} id={snack.id} to={`/editsnack/id/${snack.id}`}><button>Edit</button></Link>
                    {/* <Link className='adminSnackButtons' to='/edit'><button onClick={props.editSnackClick} id={snack.id}>Edit</button></Link> */}
                    <button className='adminSnackButtons' onClick={props.deleteSnack} id={snack.id}>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className='row adminHeader'>Admin Page</div>
            <div className='row backSnacksRow'>
                <Link to='/newsnack' className='backSnacksButton'><button className={`col-12 ${props.currentUser.admin ? '' : 'hidden'}`}>Create New Snack</button></Link>
            </div>
            <div>
                <div className='row'>{snacks}</div>
            </div>
        </>
    )
}
export default Admin