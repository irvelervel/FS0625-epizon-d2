import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, addToCartAction } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()
  // ora in tutto il componente potete invocare la funzione dispatch per "dispatchare" azioni!

  const user = useSelector((currentState) => {
    return currentState.user.name // nome utente in Redux
  })

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              {/* vorrei DISABILITARE questo button se lo user.name in Redux è vuoto */}

              <Button
                className="d-flex align-items-center"
                disabled={!user}
                onClick={() => {
                  // ora vorremo alla pressione del bottone interagire con il Redux Store
                  // vorremo ""modificare"" lo stato -> ma lo stato è IMMUTABILE -> NUOVO STATO
                  // per creare un nuovo stato, tutto parte dal DISPATCH di una ACTION
                  dispatch(addToCartAction(bookSelected)) // ora la action mi viene restituita
                  // dall'invocazione di un action creator
                }}
              >
                <span className="me-2">AGGIUNGI AL</span>
                <FaShoppingCart />
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
