import { Routes, Route, Router } from 'react-router-dom';

import { Home, Navbar, Tech, Finance, Business, Science, ContactMe  } from "./components"
// import { Tech, Finance, Business, Science } from "./components"
const App = () => {

  return (
  // <Router>
  <>
    <Navbar />    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/tech' element={<Tech />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/business" element={<Business />} />
      <Route path="/science" element={<Science />} />
      <Route path="/contactme" element={<ContactMe />} />

    </Routes>
    </>
  // </Router>
  )
}

export default App
