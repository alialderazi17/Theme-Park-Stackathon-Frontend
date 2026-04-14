import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const ParkDetails = ({ parks }) => {
  let { id } = useParams()

  const [park, setPark] = useState("")

  useEffect(() => {
    const getParkDetails = async () => {
      try {
        const response = await axios.get(
          `https://theme-park-stackathon-i3hh.onrender.com/themeparks/${id}`
        )
      } catch (error) {
        console.error("Error fetching park details!", error.message)
      }
    }
  }, [id])

  return boat ? (
    <>
      <div className="detail">
        <div className="detail-header">
          <img src={park.image} alt={park.name} />
          <div className="listing-name">
            <h1>{park.name}</h1>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="listing-header">
            <h3>Movie: {park.movie}</h3>
          </div>
          <p>{park.description}</p>
        </div>
      </div>
      <br></br>
      <Link to="/parks">Back</Link>
    </>
  ) : null
}

export default ParkDetails
