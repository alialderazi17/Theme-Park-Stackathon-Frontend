import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Themeparks from "./components/Themeparks"
import ParkDetails from "./components/ParkDetails"
import Form from "./components/Form"
import Nav from "./components/Nav"

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/themeparks" element={<Themeparks />} />
        <Route path="/themeparks/new" element={<Form />} />
        <Route path="/themeparks/:id" element={<ParkDetails />} />
      </Routes>
    </Router>
  )
}

export default App
