import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { SET_USERNAME, setUsernameAction } from '../redux/actions'

// CartIndicator ha bisogno di LEGGERE un valore dal Redux Store: la lunghezza dell'array cart.content
// ogni volta che dovete LEGGERE un valore di Redux da un componente dovete utilizzare
// l'hook "useSelector"

// REGOLE DEGLI HOOKS: potete utilizzare useSelector
// 1) solo in un componente a funzione
// 2) solo in cima al componente, fuori da cicli, condizioni e funzioni

const CartIndicator = () => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState('')

  const buttonLabel = useSelector((currentState) => {
    return currentState.cart.content.length
  })
  const user = useSelector((currentState) => {
    return currentState.user.name
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // ora dispatcheremo una action che trasmetterà a Redux il valore del nome utente inserito nel form
    dispatch(setUsernameAction(formValue))
  }

  return (
    <div className="d-flex justify-content-end my-4">
      {!user ? (
        <Form className="d-flex me-3 w-auto" onSubmit={handleSubmit}>
          <Form.Control
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value)
            }}
            placeholder="Effettua il login"
          />
          <Button type="submit" variant="info">
            LOGIN
          </Button>
        </Form>
      ) : (
        <p className="mb-0 me-3 d-flex align-items-center">
          Benvenuto, {user}!
        </p>
      )}
      <Button
        onClick={() => navigate('/cart')}
        disabled={!user}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{buttonLabel}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
