import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { useDispatch } from 'react-redux'
import { getBooksAction } from '../redux/actions'

const BookStore = () => {
  // const [books, setBooks] = useState([])
  const [bookSelected, setBookSelected] = useState(null)
  const dispatch = useDispatch()

  // const getBooks = () => {
  //   fetch('https://striveschool-api.herokuapp.com/food-books')
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json()
  //       } else {
  //         throw new Error('errore nel recupero libri')
  //       }
  //     })
  //     .then((data) => {
  //       setBooks(data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    // getBooks()
    // ora invece che fare manualmente la fetch in questo componente, faremo un dispatch
    // di getBooksAction che di fatto azionerà la logica Redux per il recupero libri
    dispatch(getBooksAction())
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row className="center-row">
      <Col lg={4}>
        <BookList bookSelected={bookSelected} changeBook={changeBook} />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
