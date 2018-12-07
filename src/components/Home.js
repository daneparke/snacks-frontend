import React from 'react'
import { Link } from 'react-router-dom'


const Home = (props) => {
    let snacks = props.snackList.map(snack => {
        return (
            <div key={`snack ${snack.id}`} className='row snackList'>
                <Link onClick={props.snackIDForReview} id={snack.id} to='/snack'>
                    <div onClick={props.snackDetailsClick} key={`snack ${snack.id}`} id={snack.id}>
                        <div id={snack.id} className='col-3'>{snack.name}</div>
                        <div id={snack.id} className='col-3'>{snack.price}</div>
                        {/* <img src={snack.image_url} alt={`Picture of ${snack.name}`} className='row snackImage'></img> */}
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
            <div>
                <div>{snacks}</div>
            </div>
        </>
    )
}
export default Home