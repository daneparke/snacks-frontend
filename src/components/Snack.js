import React from 'react'
import { Link } from 'react-router-dom'

const Snack = (props) => {
    let totalRating = 0
    let reviewLength = 0
    let snack = props.snackList.filter(snack => snack.id === Number(props.match.params.id))
    if (snack.length === 0) {
        return (
            <>
                loading...
            </>
        )
    }
    let review = props.reviews.map(review => {
        if (snack.length > 0) {
            if (snack[0].id === review.snack_id) {
                totalRating += review.rating
                reviewLength++
                if (review.user_id === props.currentUser.id) {
                    return (
                        <div className='reviews col-12' key={`review ${review.id}`}>
                            <div className='row'>
                                <b>{review.title}</b>
                            </div>
                            <div className='row'>User: {review.first_name} {review.last_name}</div>
                            <div className='row'>
                                <div className='col-1'>{review.rating}</div>
                                <div className='col-8'>{review.text}</div>
                                <div>
                                    <Link to='/edit'><button onClick={props.editReviewClick} name={review.snack_id} id={review.id}>Edit Review</button></Link>
                                    <button className='buttonHover' onClick={props.deleteReview} id={review.id}>Delete Review</button>
                                </div>
                            </div>
                        </div>
                    )
                } else if (props.currentUser.admin === true) {
                    return (
                        <div className='reviews col-12' key={`review ${review.id}`}>
                            <div className='row'>
                                <b>{review.title}</b>
                            </div>
                            <div className='row'>User: {review.first_name} {review.last_name}</div>
                            <div className='row'>
                                <div className='col-1'>{review.rating}</div>
                                <div className='col-9'>{review.text}</div>
                                <button className='buttonHover' onClick={props.deleteReview} id={review.id}>Delete Review</button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='reviews col-12' key={`review ${review.id}`}>
                            <div className='row'>
                                <b>{review.title}</b>
                            </div>
                            <div className='row'>User: {review.first_name} {review.last_name}</div>
                            <div className='row'>
                                <div className='col-1'>{review.rating}</div>
                                <div className='col-9'>{review.text}</div>
                                <button className='buttonHover' onClick={props.reportReview} id={review.id}>Report Review</button>
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
            <div className='row backSnacksRow'>
                <Link to='/home' className='backSnacksButton'><button className='col-12'>Back To Snacks</button></Link>
            </div>
            <div className='snackInfo' key={`snack ${snack[0].id}`}>
                <div className='snackHeader'>
                    <div className='snackName'>{snack[0].name}</div>
                    <div>Average Rating: {`${reviewLength > 0 ? `${(totalRating / reviewLength).toFixed(2)}` : 'Not Rated'}`}</div>
                </div>
                <img src={snack[0].image_url} alt={snack[0].name} className='invidivualSnackImage'></img>
                <div>Price ${snack[0].price}</div>
                <div>{`${snack[0].is_perishable ? 'This is' : 'Not'}`} Perishable</div>
                <div>Description:
                    <br></br>
                    {snack[0].description}
                </div>
                <Link className={`${props.userLoggedIn ? '' : 'hidden'}`} to='/add'><button onClick={props.snackIDForReview} id={snack[0].id}>Add Review</button></Link>
                {review}
            </div>
        </>
    )
}
export default Snack