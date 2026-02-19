import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import Footer from './components/Footer'
import store from './redux/store' // il risultato di configureStore
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container className="epizon-container">
          <Row>
            <Col className="text-center background-div">
              <Link to="/">
                <h1>Epizon Book Store</h1>
              </Link>
            </Col>
            <CartIndicator />
          </Row>
          <Routes>
            <Route path="/" element={<BookStore />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
