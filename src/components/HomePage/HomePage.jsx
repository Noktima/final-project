import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './style.Home.css'





let isAuthenticated = localStorage.getItem('isAuthenticated');




const HomePage = () => {

    const [username, setUsername] = useState()

    const [inputUsername, setInputUsername] = useState()
    


    const Login = () => {
        if(username != "") {
            console.log(inputUsername)
            setUsername(inputUsername)

            isAuthenticated = true
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('username', inputUsername)

        } else {
            console.log('Введите данные')
        }
    }

    const Logout = () => {
        isAuthenticated = false
        localStorage.setItem('isAuthenticated', false);
        localStorage.setItem('username', '')
        window.location.reload()
    }



            return (
        <div>
            {username && (
            <div className="home">
                <div className="textHomePage" id='hello'>Приветствуем вас, уважаемый <b>{username}</b></div>
                <Link to='/Chat' ><div className="chatLink">Перейти к чату</div></Link>
                <button className="homePageButton" id='logoutButton' onClick={Logout}>Выйти</button>
            </div>
            )}

            {!username && (
            <div className="home">
                <label className="textHomePage">Введите имя:</label>
                <input id='nameInput' name='inputName' value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
                <button className="homePageButton" id='loginButton' onClick={Login}> Сохранить имя</button>
            </div>
            )}

        </div>

        )
}
  


export default HomePage