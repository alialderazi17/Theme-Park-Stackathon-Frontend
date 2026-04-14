import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const ParkDetails = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [park, setPark] = useState("")

  useEffect(() => {
    const getParkDetails = async () => {
      try {
        const response = await axios.get(
          `https://theme-park-stackathon-i3hh.onrender.com/themeparks/${id}`
        )
        setPark(response.data)
      } catch (error) {
        console.error("Error fetching park details!", error.message)
      }
    }
    getParkDetails()
  }, [id])

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://theme-park-stackathon-i3hh.onrender.com/themeparks/${id}`
      )
      navigate("/themeparks")
    } catch (error) {
      console.error("Error deleting a Park!", error.message)
    }
  }

  return park ? (
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
          <button onClick={handleDelete}>Delete Park</button>
        </div>
      </div>
      <br></br>
      <Link to="/themeparks">Back</Link>
    </>
  ) : null
}

export default ParkDetails
