import { useState } from "react"

const
 Message = () => {

    const [messageData, setMessageData] = useState([])
    const [inputValue, setInputValue] = useState()


    const ChangeMessage = () => {
        setMessageData([...messageData, inputValue]);
        setInputValue('')
 }

    let username = localStorage.getItem('username')

    return (
        <div id="chatMain">
            <div id="chat">
                <div>
                    Chat
                </div>
                {messageData.map((el) => {
                    return (
                        <div>
                            {username}. {el}
                        </div>
                    )
                })}
                </div>
                <div id="wrapper">
                    <label>Напиши коментарий</label>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    <button onClick={ChangeMessage}>Отправить</button>
                </div>  
        </div>
    )
}

export default Message