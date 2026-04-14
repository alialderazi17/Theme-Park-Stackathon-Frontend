import { Routes, Route, Link } from "react-router-dom"
import Themeparks from "./components/Themeparks"
import ParkDetails from "./components/ParkDetails"
import Form from "./components/Form"
import Nav from "./components/Nav"
import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    const getParks = async () => {
      try {
        const response = await axios.get(
          "https://theme-park-stackathon-i3hh.onrender.com/themeparks"
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
                    <Link
                      to={`/themeparks/${park._id}`}
                      className="card-link"
                      key={park._id}
                    >
                      <div className="park-card">
                        <h3>{park.name}</h3>

                        <img
                          src={park.image}
                          alt={park.name}
                          className="park-image"
                        />

                        <p className="movie">🎬 {park.movie}</p>
                      </div>
                    </Link>
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
