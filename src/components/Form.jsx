import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    movie: '',
    description: '',
    image: ''
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(
      'https://theme-park-stackathon-i3hh.onrender.com/themeparks/new',
      form
    )
    setForm(initialState)
    navigate('/themeparks')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Theme Park Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
      />

      <label htmlFor="movie">From Which Movie: </label>
      <input
        type="text"
        name="movie"
        onChange={handleChange}
        value={form.movie}
      />

      <label htmlFor="description">Description: </label>
      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={form.description}
      ></textarea>

      <label htmlFor="image">Image: </label>
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={form.image}
      />

      <button type="submit">Add Theme Park</button>
    </form>
  )
}

export default Form
