import React from 'react'

import booksData from './book.json'
import Book from './book.jsx'

const AllBooks = () => {
  return (
    <div>
      <h1 className='text-4xl text-[transparent] bg-linear-to-t from-sky-500 to-indigo-500  bg-clip-text  font-bold text-center mt-4 font-serif'>All Books List</h1>
      <div className='flex flex-wrap justify-center gap-10 my-4 '>

        {

          booksData.data.data.map((book) => {
            console.log(book);
            
            return (
              <Book
                bookTitle={book.volumeInfo.title}
                subTitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                description={book.volumeInfo.description}
                catgory={book.volumeInfo.categories}
                pic={book.volumeInfo.imageLinks.thumbnail}                
              />
            )
          })

        }

      </div>
    </div>
  )
}

export default AllBooks