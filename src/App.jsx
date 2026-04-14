import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const App = () => {
  const [parks, setParks] = useState([])
  // useEffect to get all parks from our backend server
  useEffect(() => {
    const getParks = async () => {
      try {
        let response = await axios.get("http://localhost:3000/parks")
        // set the data state
        setParks(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getParks()
  }, [])

  return (
    // map the park link and display
    // add a link on each park and add id
    <>
      <h1>Theme Parks</h1>
      {parks?.map((park) => (
        <div key={park._id}>
          <Link to={`/parks/${park._id}`}>
            <h3>{park.name}</h3>
          </Link>
          <p>Location: {park.location}</p>
        </div>
      ))}
    </>
  )
}

export default App
