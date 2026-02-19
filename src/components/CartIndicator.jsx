import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

// CartIndicator ha bisogno di LEGGERE un valore dal Redux Store: la lunghezza dell'array cart.content
// ogni volta che dovete LEGGERE un valore di Redux da un componente dovete utilizzare
// l'hook "useSelector"

// REGOLE DEGLI HOOKS: potete utilizzare useSelector
// 1) solo in un componente a funzione
// 2) solo in cima al componente, fuori da cicli, condizioni e funzioni

const CartIndicator = () => {
  const navigate = useNavigate()
  const buttonLabel = useSelector((currentState) => {
    return currentState.cart.content.length
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{buttonLabel}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
