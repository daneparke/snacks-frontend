import React from 'react'
import { Link } from 'react-router-dom'

const NewSnack = (props) => {
    return (
        <>
            <>
                <div className='col-12 formContainer'>
                    <div className='formTitle'>Make A New Snack</div>
                    <div className='form-container col-8'>
                        <div className='form-group'>
                            <label>Snack Name</label>
                            <input onChange={props.handleInput} type='text' placeholder='Snack Name' name='snackName' />
                        </div>
                        <div className='form-group'>
                            <label>Image Url</label>
                            <textarea rows='1' onChange={props.handleInput} type='text' placeholder='Snack Image URL' name='snackUrl' />
                        </div>
                        <div className='form-group'>
                            <label>Is This Snack Perishable?</label>
                            {/* <checkbox></checkbox> */}
                            <input onChange={props.handleInput} type='boolean' placeholder='true or false' name='snackPerishable' />
                        </div>
                        <div className='form-group'>
                            <label>Snack Price</label>
                            <input onChange={props.handleInput} type='number' placeholder='2.00' name='snackPrice' />
                        </div>
                        <div className='form-group'>
                            <label>Snack Description</label>
                            <textarea rows='2' onChange={props.handleInput} type='text' placeholder='brief description' name='snackDescription' />
                        </div>
                        <Link to={`${props.reviewInputted ? `/newsnack` : '/admin'}`}><button onClick={props.addSnack}>Create New Snack</button></Link>
                    </div>
                </div>
            </>
        </>
    )
}

export default NewSnack