import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
import GameTopup from '../pages/GameTopup'

//...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/topup/:game" element={<GameTopup />} />
</Routes>
