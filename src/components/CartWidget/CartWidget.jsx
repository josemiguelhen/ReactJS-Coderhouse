import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>5</span>
        </div>
    )
}