
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  const { documents: books } = useCollection(
    'books',
    ['uid', '==', user.uid]
    )
 
  return (
    <div className="book-app">
       <div className='container mt-4'>
        <BookForm />
      </div>
      {books && <BookList books={books} />}
     
    </div>
  );
}
