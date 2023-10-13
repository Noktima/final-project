
let isAuthenticated = false

const HomePage = () => {






       if (isAuthenticated === true) {
            return (
        <div>
            <div>Приветствуем вас, уважаемый <b></b></div>
            <button>Выйти</button>
        </div>
        )
        }
 
        else {
        return (
                    <div>
            <label>Введите имя:</label>
            <input/>
            <button>Сохранить имя</button>
        </div>
        )
    }

}



export default HomePage