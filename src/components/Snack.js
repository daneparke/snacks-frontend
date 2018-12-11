import React from 'react'
import { Link } from 'react-router-dom'

const Snack = (props) => {
    let totalRating = 0
    let reviewLength = 0
    let snack = props.oneSnack.map(snack => {
        if (props.oneSnack.length > 0) {
            if (props.userLoggedIn === true) {
                return (
                    <div className='snackInfo' key={`snack ${snack.id}`}>
                        <div className='row'>{snack.name}</div>
                        <div className='row'>{snack.price}</div>
                        <img src={snack.image_url} alt={snack.name} className='row snackImage'></img>
                        <div className='row'>{`${snack.is_perishable ? 'This is' : 'Not'}`} Perishable</div>
                        <div className='row'>{snack.description}</div>
                        <Link to='/add'><button onClick={props.snackIDForReview} id={snack.id}>Add Review</button></Link>
                    </div>
                )
            } else {
                return (
                    <div className='snackInfo' key={`snack ${snack.id}`}>
                        <div className='row'>{snack.name}</div>
                        <div className='row'>{snack.price}</div>
                        <img src={snack.image_url} alt={snack.name} className='row snackImage'></img>
                        <div className='row'>{`${snack.is_perishable ? 'This is' : 'Not'}`} Perishable</div>
                        <div className='row'>{snack.description}</div>
                    </div>
                )
            }
        } else {
            return null
        }
    })
    let review = props.reviews.map(review => {
        if (props.oneSnack.length > 0) {
            if (props.oneSnack[0].id == review.snack_id) {
                totalRating += review.rating
                reviewLength++
                if (review.user_id === props.currentUser.id) {
                    return (
                        <div className='reviews col-12'>
                            <div className='row'>
                                <b>{review.title}</b>
                            </div>
                            <div className='row'>User: {review.first_name} {review.last_name}</div>
                            <div className='row'>
                                <div className='col-1'>{review.rating}</div>
                                <div className='col-5'>{review.text}</div>
                                <button onClick={props.deleteReview} id={review.id}>Delete Review</button>
                                <Link to='/edit'><button onClick={props.editReviewClick} id={review.id}>Edit Review</button></Link>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className='reviews col-12'>
                            <div className='row'>
                                <b>{review.title}</b>
                            </div>
                            <div className='row'>User: {review.first_name} {review.last_name}</div>
                            <div className='row'>
                                <div className='col-1'>{review.rating}</div>
                                <div className='col-5'>{review.text}</div>
                                <button onClick={props.reportReview} id={review.id}>Report Review</button>
                            </div>
                        </div>
                    )
                }
            }
            return null
        }
        return null
    })
    return (
        <>
            <div>Average Rating: {(totalRating / reviewLength).toFixed(2)}</div>
            {snack}
            {review}
        </>
    )
}
export default Snack