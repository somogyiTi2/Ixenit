import React from 'react'

export const Book = ({tempData, addBook}) => {
  return (
    <div style={{backgroundColor:'gray'}} onClick={() => addBook(tempData.id, tempData.title)}>
        <h1>
            {tempData.title}
        </h1>
        <p>{tempData.author.firstName} {tempData.author.lastName}</p>
        <p>{tempData.author.birthData}</p>
        {/*<button value={tempData.title} 
        onClick={() => addBook(tempData.id)}>Megveszem</button> */}
    </div>
  )
}
export default Book

