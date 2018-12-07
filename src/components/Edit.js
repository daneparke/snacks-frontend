import React from 'react'
import { Link } from 'react-router-dom'

const Edit = (props) => {
    let review = props.review.map(review => {
        return (
            <div className='col-5 addForm'>
                <label className='row'>Title</label>
                <input className='row' onChange={props.handleInput} className='reviewInput' type='text' placeholder={review.title} placeholder='Desired Username' name='title' />
                <label className='row'>Review</label>
                <input className='row' onChange={props.handleInput} className='reviewInput' type='text' placeholder={review.text} placeholder='Desired Username' name='reviewText' />
                <label className='row'>Rating</label>
                <input className='row' onChange={props.handleInput} className='reviewInput' type='text' placeholder={review.rating} name='rating' />
                <Link to='/home'><button onClick={props.editReview} id={review.id}>Edit Review</button></Link>
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