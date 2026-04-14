import "./App.css"
import { Routes, Route } from "react-router-dom"
import ParkDetails from "./components/ParkDetails"
import Form from "./components/Form"
const App = () => {
  return (
    <>
      <h1>Hi</h1>
      <Routes>
        <Route path="/themeparks/:id" element={<ParkDetails />} />
        <Route path="/themeparks/new" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
