import {useState} from 'react'
import axios from 'axios'
function App() {
 const [ville, setville] = useState("")
 const [weatherdata, setweatherdata] = useState(null)
 
const getweather = async () =>{  
  const apikey = 'd3ff86bfafb1410d96e114546240711';
  const apiurl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${ville}&lang=fr`
  try {
    const reponse = await axios.get(apiurl)
    setweatherdata(reponse.data)
  } catch(err) {
    alert("Ville non trouver")
  }


}
const handlechange =(event) => {
 setville(event.target.value)
}
 
  return (
    <div>
      <h1>Méteo API</h1>
      <input type="text" placeholder='Ville ?' onChange={handlechange} value={ville} />
      <button onClick={getweather}>Obtenir la température</button>
      <ul>
        <li>Lieu : {weatherdata?.location?.name}</li>
        <li>La température : {weatherdata?.current?.temp_c}°C</li>
    
      </ul>
   
      </div>
  );
}

export default App;
