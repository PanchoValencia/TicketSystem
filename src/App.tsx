import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './Platform/Routes'
import {Home} from './Pages/Home/Home'
import {Details} from './Pages/Details/Details'
import {NotFound} from './Pages/NotFound/NotFound'
import {ManageTicket} from './Pages/ManageTicket/ManageTicket'
import { Provider } from 'react-redux'
import { store } from './Store/Store'

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
