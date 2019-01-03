import React from 'react'
import { Link } from 'react-router-dom'

const NewSnack = (props) => {
    return (
        <>
            <>
                <div>
                    <div className='col-5 addForm'>
                        <label>Snack Name</label>
                        <input onChange={props.handleInput} type='text' placeholder='Snack Name' name='snackName' />
                        <label>Image Url</label>
                        <input onChange={props.handleInput} type='text' placeholder='Snack Title' name='snackUrl' />
                        <label>Is This Snack Perishable?</label>
                        {/* <checkbox></checkbox> */}
                        <input onChange={props.handleInput} type='boolean' placeholder='Snack Title' name='snackPerishable' />
                        <label>Snack Price</label>
                        <input onChange={props.handleInput} type='number' placeholder='Snack Title' name='snackPrice' />
                        <label>Snack Description</label>
                        <input onChange={props.handleInput} type='text' placeholder='Snack Text' name='snackDescription' />
                    </div>
                    <Link to={`${props.reviewInputted ? `/newsnack` : '/admin'}`}><button onClick={props.addSnack}>Create New Snack</button></Link>
                </div>
            </>
        </>
    )
}

export default NewSnack