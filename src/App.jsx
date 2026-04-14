import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Themeparks from "./components/Themeparks"
import ParkDetails from "./components/ParkDetails"
import Form from "./components/Form"
import Nav from "./components/Nav"
import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const App = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    const getParks = async () => {
      try {
        let response = await axios.get(
          "https://theme-park-stackathon-i3hh.onrender.com/parks"
        )
        setParks(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getParks()
  }, [])

  return (
    <>
      <Nav />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Featured Parks</h1>

                <div className="parks-grid">
                  {parks.map((park) => (
                    <div className="park-card" key={park._id}>
                      <Link to={`/themeparks/${park._id}`}>
                        <h3>{park.name}</h3>
                      </Link>

                      <img
                        src={park.image}
                        alt={park.name}
                        className="park-image"
                      />

                      <p className="movie">🎬 {park.movie}</p>
                    </div>
                  ))}
                </div>
              </>
            }
          />

          <Route path="/themeparks" element={<Themeparks />} />
          <Route path="/themeparks/new" element={<Form />} />
          <Route path="/themeparks/:id" element={<ParkDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
