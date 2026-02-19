import { Alert } from 'react-bootstrap'
import Book from './Book'
import { useSelector } from 'react-redux'

const BookList = ({ changeBook, bookSelected }) => {
  // prima BookList riceveva l'array dei libri da mostrare ("books") da suo padre BookStore attraverso
  // una prop; ora che i libri sono universalmente accessibili perchè salvati nello store Redux, li
  // prendiamo direttamente da BookList con uno useSelector

  const books = useSelector((currentState) => {
    return currentState.shop.available
  })

  const booksError = useSelector((currentState) => {
    return currentState.shop.error
  })

  return (
    <div className="mb-3">
      {booksError && <Alert variant="danger">Errore nel recupero libri</Alert>}
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          changeBook={changeBook}
          bookSelected={bookSelected}
        />
      ))}
    </div>
  )
}

export default BookList
