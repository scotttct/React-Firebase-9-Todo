import { db } from '../firebase/config'
import { doc, deleteDoc } from 'firebase/firestore'

export default function BookList({ books }) {
  console.log(books)
  const handleClick = async (id) => {
    const docRef = doc(db, 'books', id)

    await deleteDoc(docRef)

  }

  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <div key={book.id}  className="container ">
            <div className='row py-2 row1'>
              <div className='col '>
                <li  >{book.title} </li> 
              </div>
              <div className="col">
                <span className="">   favorite: {book.favorite}</span>  
    
              </div>
              <div className='col'>
                <button onClick={() => handleClick(book.id)} className="btn btn-danger align-self-end">del</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}