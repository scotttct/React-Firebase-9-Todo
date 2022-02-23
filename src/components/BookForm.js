import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { db } from '../firebase/config'
import  { collection, addDoc } from 'firebase/firestore'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const { user } = useAuthContext()
  const [ fav, setFav] = useState("Yes")

  const handleSubmit = async (e) => {
    e.preventDefault()
    //add documents to the collection of books
    await addDoc(collection(db, 'books'), { 
      title: newBook,
      uid: user.uid,
      favorite: fav
    })

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row bg-secondary text-white text-center align-center'>
        
        <div className='col'>
          <label>
            <span className='form-label'>Add a new book title:</span>
            <input 
              placeholder='Add Book'
              required
              type="text"
              className='form-contol'
              onChange={(e) => setNewBook(e.target.value)}
              value={newBook}
            />
          </label>
      </div>
      <div className='col'>
        <label>
          <span className='form-label'>Is a favorite book?</span>
          <select 
            required
            className='form-select'
            onChange={(e) => setFav(e.target.value)}
            value={fav}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

        </label>
      </div>
        <div className='col pt-4'>
          <button>Add</button>
        </div>
      </div>
    </form>
  )
}
