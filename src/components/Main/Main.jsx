import { Route, Routes } from "react-router-dom"
import Home from "../HomePage/HomePage"
import TestApi from "../TestApi/TestApi"
import styles from './style.Main.css'
import Chat from '../Chat/Chat'


const Main = () => {


    return (
        <div id='main'>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/Chat' element={<Chat />}></Route>
                <Route path='/test' element={<TestApi />}></Route>
            </Routes>
        </div>
    )
}

export default Main