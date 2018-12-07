import React from 'react'
import { Link } from 'react-router-dom'


const Add = (props) => {
    return (
        <>
            <div>
                <div className='col-5 addForm'>
                    <label>Title</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Desired Username' name='title' />
                    <label>Review</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Desired Username' name='reviewText' />
                    <label>Rating</label>
                    <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='1-5' name='rating' />
                    {/* <Link to={`${props.allInputted ? '/home' : '/'}`}> <button onClick={props.addMovie} type="submit" className="btn btn-dark">Existing User</button></Link> */}
                </div>
                <Link to={`${props.reviewInputted ? '/home' : '/add'}`}><button onClick={props.addReview}>Add Review</button></Link>
            </div>
        </>
    )
}
export default Add