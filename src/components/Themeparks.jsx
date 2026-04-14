import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../App.css"

const Themeparks = () => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    const getParks = async () => {
      try {
        const response = await axios.get(
          "https://theme-park-stackathon-i3hh.onrender.com/themeparks"
        )
        setParks(response.data)
      } catch (error) {
        console.error("Error fetching parks:", error)
      }
    }

    getParks()
  }, [])

  return (
    <div className="container">
      <h1>Theme Parks</h1>

      <div className="parks-grid">
        {parks.map((park) => {
          const { _id: id, name, image, movie } = park

          return (
            <Link to={`/themeparks/${id}`} className="card-link" key={id}>
              <div className="park-card">
                <h3>{name}</h3>

                <img src={image} alt={name} className="park-image" />

                <p className="movie">🎬 {movie}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Themeparks
