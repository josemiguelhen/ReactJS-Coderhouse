import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
export const CartWidget = () => {
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span>2</span>
        </div>
    )
}