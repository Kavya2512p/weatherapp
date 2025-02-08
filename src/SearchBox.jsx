// import React from 'react'

// export default function SearchBox(props) {
//     return (
//         <div >
//             <div className='fs-1 text-center pb-2 dancing-script '>Welcome to the Temperature Checker!</div>
//             <input type="text" placeholder='Enter city name to search' className='form-control'
//                 onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                         props.recieveHandler(e.target.value);
//                     }
//                 }}
//             />
//         </div>
//     )
// }

import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function SearchBox(props) {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            props.recieveHandler(city);
        }
    };

    return (
        <div>
            <div className='fs-1 text-center pb-2 dancing-script'>Welcome to the Temperature Checker!</div>
            <div className='input-group'>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Enter city name to search'
                    className='form-control'
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <span className="input-group-text" onClick={handleSearch} style={{ cursor: 'pointer' }}>
                    <i className="fa fa-search"></i>
                </span>
            </div>
        </div>
    );
}


