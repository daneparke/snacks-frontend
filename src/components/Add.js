import React from 'react'
import { Link } from 'react-router-dom'


const Add = (props) => {
    return (
        <>
            <div>
                <div className='col-5 addForm'>
                    <label>Title</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Review Title' name='title' />
                    <label>Rating</label>
                    <input onChange={props.handleInput} className='reviewInput ratingInput' type='number' min='1' max='5' placeholder='1-5' name='rating' />
                    <label>Review</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Review Text' name='reviewText' />
                </div>
                <Link to={`${props.reviewInputted ? '/snack' : '/add'}`}><button onClick={props.addReview}>Add Review</button></Link>
            </div>
        </>
    )
}
export default Add