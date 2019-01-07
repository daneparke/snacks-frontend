import React from 'react'
import { Link } from 'react-router-dom'

const Edit = (props) => {
    let review = props.review.map(review => {
        return (
            <div className='col-12 formContainer' key={`review ${review.id}`}>
                <div className='formTitle'>Edit Your Review</div>
                <div className='form-container col-8'>
                    <div className='form-group'>
                        <label>Title</label>
                        <input onChange={props.handleInput} className='reviewInput' type='text' defaultValue={review.title} name='title' />
                    </div>
                    <div className='form-group'>
                        <label>Rating</label>
                        <input onChange={props.handleInput} className='reviewInput ratingInput' defaultValue={review.rating} type='number' min='1' max='5' name='rating' />
                    </div>
                    <div className='form-group'>
                        <label>Review</label>
                        <textarea rows='4' onChange={props.handleInput} className='reviewInput' type='text' defaultValue={review.text} name='reviewText' />
                    </div>
                    <Link to={`${props.reviewInputted ? `snack/id/${props.reviewSnackID}` : '/edit'}`}><button onClick={props.editReview} id={review.id}>Edit Review</button></Link>
                </div>
            </div>
        )
    })
    return (
        <>
            <div>
                {review}
            </div>
        </>
    )
}
export default Edit