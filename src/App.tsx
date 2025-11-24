import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './Platform/Routes'
import {Home} from './Pages/Home/Home'
import {Details} from './Pages/Details/Details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home/>} />
        <Route path={ROUTES.details} element={<Details/>} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <Home />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
