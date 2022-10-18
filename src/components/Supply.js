import React from 'react'
import Book from './Book'

export const Supply = ({tempData, addBook}) => {
  return (
    <div>
     {tempData.map((tempData) => (
        <Book key={tempData.key} tempData={tempData} addBook={addBook}/>
        ))}
    
    </div>
  )
}
export default Supply


