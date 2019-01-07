import React from 'react'
import { Link } from 'react-router-dom'


const Add = (props) => {
    return (
        <>
            <div className='col-12 formContainer'>
                <div className='formTitle'>Add a Review</div>
                <div className='form-container col-8'>
                    <div className='form-group'>
                        <label>Title</label>
                        <input onChange={props.handleInput} className='reviewInput rounded' type='text' placeholder='Review Title' name='title' />
                    </div>
                    <div className='form-group'>
                        <label>Rating</label>
                        <input onChange={props.handleInput} className='reviewInput ratingInput rounded' type='number' min='1' max='5' placeholder='1-5' name='rating' />
                    </div>
                    <div className='form-group'>
                        <label>Review</label>
                        <textarea rows='4' onChange={props.handleInput} className='reviewInput rounded' type='text' placeholder='Review Text' name='reviewText' />
                    </div>
                    <Link to={`${props.reviewInputted ? `snack/id/${props.reviewSnackID}` : '/add'}`}><button onClick={props.addReview}>Add Review</button></Link>
                </div>
            </div>
        </>
    )
}
export default Add