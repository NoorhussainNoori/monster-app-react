import React from 'react'

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="item-center justify-center flex ">
          <input className="m-6 border-2 p-2 rounded-md outline-offset-0"  
          type="search" 
          placeholder ={placeholder} 
          onChange={handleChange}
          />
    </div>
  )
