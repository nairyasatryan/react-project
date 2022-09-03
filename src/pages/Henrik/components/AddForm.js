import React from 'react'

function AddForm({ handleInputChange, placeholder, value, fieldName }) {


    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                onChange={(e) => handleInputChange(e, fieldName)}
                value={value}
            />
        </>
    )
}

export default AddForm