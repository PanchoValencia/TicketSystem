import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './Platform/Routes'
import {Home} from './Pages/Home/Home'
import {Details} from './Pages/Details/Details'
import {NotFound} from './Pages/NotFound/NotFound'
import {ManageTicket} from './Pages/ManageTicket/ManageTicket'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home/>} />
        <Route path={ROUTES.details} element={<Details/>} />
        <Route path={ROUTES.create} element={<ManageTicket/>} />
        <Route path={ROUTES.edit} element={<ManageTicket/>} />

        {/* fallback */}
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
