import "./App.css"
import { Routes, Route } from "react-router-dom"
import ParkDetails from "../components/ParkDetails"

const App = () => {
  return (
    <>
      <h1>Hi</h1>
      <Routes>
        <Route path="/themeparks/:id" element={<ParkDetails />} />
      </Routes>
    </>
  )
}

export default App
