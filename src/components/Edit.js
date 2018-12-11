import React from 'react'
import { Link } from 'react-router-dom'

const Edit = (props) => {
    let review = props.review.map(review => {
        return (
            <div>
                <div className='col-5 addForm'>
                    <label>Title</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder={review.title} placeholder='Desired Username' name='title' />
                    <label>Rating</label>
                    <input onChange={props.handleInput} className='reviewInput ratingInput' type='number' min='1' max='5' placeholder='1-5' name='rating' />
                    <label>Review</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder={review.text} placeholder='Desired Username' name='reviewText' />
                    {/* <Link to='/home'><button onClick={props.editReview} id={review.id}>Edit Review</button></Link> */}
                </div>
                <Link to={`${props.reviewInputted ? '/snack' : '/edit'}`}><button onClick={props.editReview} id={review.id}>Edit Review</button></Link>
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