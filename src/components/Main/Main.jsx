import { Route, Routes } from "react-router-dom"
import Home from "../HomePage/HomePage"
import TestApi from "../TestApi/TestApi"


const Main = () => {


    return (
        <div className="container">
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                {/* <Route path='/message' element={Message}></Route> */}
                <Route path='/test' element={<TestApi />}></Route>
            </Routes>
        </div>
    )
}

export default Main