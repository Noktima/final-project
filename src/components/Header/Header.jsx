import { Link } from "react-router-dom"
import styles from './style.Header.css'

const Header = () => {


    return (
        <div id="header">
            <nav id="navBar">
                <ul id="list">
                    <li className="link"><Link to='/'>To home</Link></li>
                    <li className="link"><Link to='/chat'>To chat</Link></li>
                    <li className="link"><Link to='/test'>TestApi</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header