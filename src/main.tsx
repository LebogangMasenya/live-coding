import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ReadingQueue from './components/ReadingQueue.tsx'
import ColorPaletePicker from './components/ColorPalettePicker.tsx'
import IdeaBoard from './components/IdeaBoard.tsx'
import GuestList from './components/GuestList.tsx'
import GroceryList from './components/GroceryList.tsx'


/*
POST MORTEM:
BrowserRouter needed to wrap the the entire app to use the logic of useLocation and useNavigate
simply using Routes, Router and Route without BrowserRouter will not work, as they are dependent on the context provided by BrowserRouter.
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
        <Routes>
          <Route path="/grocery-list" element={<GroceryList />} />
          <Route path="/guest-list" element={<GuestList />} />
          <Route path="/idea-board" element={<IdeaBoard />} />
          <Route path="/color-palette-picker" element={<ColorPaletePicker />} />
          <Route path="/reading-queue" element={<ReadingQueue />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
