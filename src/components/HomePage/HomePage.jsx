import { useState } from "react"
import { Link } from "react-router-dom"





let isAuthenticated = localStorage.getItem('isAuthenticated');
let username = localStorage.getItem('username')




const HomePage = () => {

    const [username, setUsername] = useState()

    const [inputUsername, setInputUsername] = useState()
    


    const Login = () => {
        if(username != '') {
            setUsername(inputUsername)

            isAuthenticated = true
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('username', username)

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
            <div>
                <div>Приветствуем вас, уважаемый <b>{username}</b></div>
                <button onClick={Logout}>Выйти</button>
            </div>
            )}

            {!username && (
            <div>
                <label>Введите имя:</label>
                <input name='inputName' value={username} onChange={(event) => setInputUsername(event.target.value)} />
                <button onClick={Login}> <Link>Сохранить имя</Link></button>
            </div>
            )}

        </div>

        )
}
  


export default HomePage