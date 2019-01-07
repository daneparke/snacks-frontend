import React from 'react'
import { Link } from 'react-router-dom'

const EditSnack = (props) => {
    let snack = props.snackList.filter(snack => snack.id === Number(props.match.params.id))

    return (
        <>
            <div className='editSnack col-12 formContainer' key={`snack ${snack[0].id}`}>
                <div className='formTitle'>Edit Snack</div>
                <div className='form-container col-8'>
                    <img src={snack[0].image_url} alt={snack[0].name} className='snackImage'></img>
                    <div className='form-group'>
                        <label>Name</label>
                        <input onChange={props.handleInput} type='text' defaultValue={snack[0].name} name='snackName' />
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input onChange={props.handleInput} type='number' defaultValue={snack[0].price} name='snackPrice' />
                    </div>
                    <div className='form-group'>
                        <label>Perishable?</label>
                        <input onChange={props.handleInput} type='boolean' defaultValue={snack[0].is_perishable} name='snackPerishable' />
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows='4' onChange={props.handleInput} type='text' defaultValue={snack[0].description} name='snackDescription' />
                    </div>
                    <div className='form-group'>
                        <label>Image URL</label>
                        <textarea rows='2' onChange={props.handleInput} type='text' defaultValue={snack[0].image_url} name='snackUrl' />
                    </div>
                    <Link to='/admin' ><button onClick={props.editSnack} id={snack[0].id}> Edit Snack</button> </Link>
                </div>
            </div>
        </>
    )
}

export default EditSnack