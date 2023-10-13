import { Link } from "react-router-dom"

const Header = () => {


    return (
        <div className="header">
            <nav className="navBar">
                <ul>
                    <li><Link to='/'>To home</Link></li>
                    <li><Link to='/chat'>To chat</Link></li>
                    <li><Link to='/test'>TestApi</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header