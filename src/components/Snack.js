import React from 'react'
import { Link } from 'react-router-dom'


const Snack = (props) => {
    let snack = props.oneSnack.map(snack => {
        if (props.oneSnack.length > 0) {
            return (
                <div className='snackInfo' key={`snack ${snack.id}`}>
                    <div className='row'>{snack.name}</div>
                    <div className='row'>{snack.price}</div>
                    <img src={snack.image_url} alt={snack.name} className='row snackImage'></img>
                    <div className='row'>{`${snack.is_perishable ? 'This is' : 'Not'}`} Perishable</div>
                    <div className='row'>{snack.description}</div>
                    {/* <button onClick={props.editMovieButton} id={movie.id} className='col-2'>Edit</button> */}
                    {/* <Link className='col-3' to='/snack/edit'><button id={snack.id}>Edit</button></Link> */}
                    <div className='row'>{snack.description}</div>
                    {/* <div>{review}</div> */}
                    <Link to='/add'><button onClick={props.snackIDForReview} id={snack.id}>Add Review</button></Link>
                </div>
            )
        } else {
            return null
        }
    })
    let review = props.reviews.map(review => {
        if (props.oneSnack.length > 0) {
            if (props.oneSnack[0].id == review.snack_id) {
                return (
                    <div className='reviews'>
                        <div className='row'>{review.title}</div>
                        <div className='row'>{review.text}</div>
                        <div className='row'>{review.rating}</div>
                        <button onClick={props.deleteReview} id={review.id}>Delete Review</button>
                        <Link to='/edit'><button onClick={props.editReviewClick} id={review.id}>Edit Review</button></Link>
                    </div>
                )
            }
        }
    })
    return (
        <>
            <div>
                {snack}
                {review}
            </div>
        </>
    )
}
export default Snack