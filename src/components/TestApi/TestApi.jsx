import { useEffect, useState } from "react"


const ApiTest = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const url = 'https://api.publicapis.org/entries';



  fetch(url)
  .then((response) => response.json())
  .then(response =>{
    console.log(response)
  });
  
    })
    
    return (
        <div>ApiTest</div>
    )
}

export default ApiTest