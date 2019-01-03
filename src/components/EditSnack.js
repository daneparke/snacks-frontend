import React from 'react'
import { Link } from 'react-router-dom'

const EditSnack = (props) => {
    let snack = props.snackList.filter(snack => snack.id === Number(props.match.params.id))

    return (
        <>
            <div className='editSnack' key={`snack ${snack[0].id}`}>
                <img src={snack[0].image_url} alt={snack[0].name} className='snackImage'></img>
                <label>Name</label>
                <input onChange={props.handleInput} type='text' defaultValue={snack[0].name} name='url' />
                <label>Price</label>
                <input onChange={props.handleInput} type='text' defaultValue={snack[0].price} name='url' />
                <label>Perishable?</label>
                <input onChange={props.handleInput} type='text' defaultValue={snack[0].is_perishable} name='url' />
                <label>Description</label>
                <input onChange={props.handleInput} type='text' defaultValue={snack[0].description} name='url' />
                <label>Image URL</label>
                <input onChange={props.handleInput} type='text' defaultValue={snack[0].image_url} name='url' />
                <Link to='/admin' ><button> Edit Snack</button> </Link>
            </div>
        </>
    )
}

export default EditSnack