import { useEffect, useState } from "react"


const ApiTest = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const url = 'https://catfact.ninja/fact';




    fetch(url)
     .then((response) => response.json())
     .then(response =>{
       console.log(response)   
     });


 

     
    })
    
    return (
        <div>
            TestApi
        </div>
    )
}

export default ApiTest