import "./App.css"
import { Routes, Route } from "react-router-dom"
import ParkDetails from "./components/ParkDetails"
import Form from "./components/Form"
import Nav from "./components/Nav"
const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/themeparks/:id" element={<ParkDetails />} />
        <Route path="/themeparks/new" element={<Form />} />
      </Routes>
    </>
  )
}

export default App
