import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/products'




export default () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    const onChange = (e) => {
        setName(e.target.value)

    }

    
    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(addProduct({
            id: uuidv4(),
            name: name
        }))


        setName('')
        
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="Product Name" />
            <button type="submit">ADD</button>
        </form>
    )


}