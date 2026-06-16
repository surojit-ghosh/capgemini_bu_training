import React from 'react'
 
export default function SearchBar({onSearch}) {
 
  return (
        <div style={{margin: '20px',backgroundColor: 'lightblue', padding: '20px',height: '200px', width: '200px',border: '1px solid black'}}>
      <input type="text" placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}