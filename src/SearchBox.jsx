import React from 'react'

export default function SearchBox(props) {
    return (
        <div >
            <div className='fs-1 text-center pb-2 dancing-script text-info'>Welcome to the Temperature Checker!</div>
            <input type="text" placeholder='search here' className='form-control'
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        props.recieveHandler(e.target.value);
                    }
                }}
            />
        </div>
    )
}

