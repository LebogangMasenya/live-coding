
import {NavLink} from "react-router-dom"
import './index.css'
import './App.css'

function App() {

  return (
      <nav className="flex space-x-1 mt-6">
        <NavLink className="p-2 border-2" to="/grocery-list">Grocery List</NavLink>
        <NavLink  className="p-2 border-2" to="/guest-list">Guest List</NavLink>
        <NavLink  className="p-2 border-2" to="/idea-board">Idea Board</NavLink>
        <NavLink  className="p-2 border-2" to="/color-palette-picker">Color Palette Picker</NavLink>
        <NavLink  className="p-2 border-2" to="/reading-queue">Reading Queue</NavLink>
      </nav>
  )
}

export default App
