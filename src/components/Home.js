import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    let snacks = props.snackList.map(snack => {
        return (
            <div key={`snack ${snack.id}`} className='snackList col-xs-12 col-sm-3'>
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
                {/* <button onClick={props.deleteSnack} id={snack.id} className='col-3'>Delete</button> */}
            </div>
        )
    })
    return (
        <>
            <div className='row'>{snacks}</div>
        </>
    )
}
export default Home