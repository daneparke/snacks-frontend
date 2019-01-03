import React from 'react'
import { Link } from 'react-router-dom'

const NewSnack = (props) => {
    return (
        <>
            <>
                <div>
                    <div className='col-5 addForm'>
                        <label>Snack Name</label>
                        <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Snack Name' name='title' />
                        <label>Image Url</label>
                        <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Snack Title' name='title' />
                        <label>Is This Snack Perishable?</label>
                        <checkbox></checkbox>
                        {/* <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Snack Title' name='title' /> */}
                        <label>Snack Price</label>
                        <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Snack Title' name='title' />
                        <label>Snack Description</label>
                        <input onChange={props.handleInput} className='reviewInput' type='text' placeholder='Snack Text' name='reviewText' />
                    </div>
                    <Link to={`${props.reviewInputted ? `/newsnack` : '/admin'}`}><button onClick={props.addReview}>Create New Snack</button></Link>
                </div>
            </>
        </>
    )
}

export default NewSnack