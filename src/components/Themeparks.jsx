import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

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
    <div>
      <h1>Theme Parks</h1>

      {parks.map((park) => {
        const { _id: id, name, image, movie, description } = park

        return (
          <div key={id}>
            <Link to={`/themeparks/${id}`}>
              <h2>{name}</h2>
            </Link>

            <img src={image} alt={name} />
            <p>{movie}</p>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Themeparks
