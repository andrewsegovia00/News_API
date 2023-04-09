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
      <Route path='https://thriving-lamington-a6a5cb.netlify.app/tech' element={<Tech />} />
      <Route path="https://thriving-lamington-a6a5cb.netlify.app/finance" element={<Finance />} />
      <Route path="https://thriving-lamington-a6a5cb.netlify.app/business" element={<Business />} />
      <Route path="https://thriving-lamington-a6a5cb.netlify.app/science" element={<Science />} />
      <Route path="https://thriving-lamington-a6a5cb.netlify.app/contactme" element={<ContactMe />} />

    </Routes>
    </>
  // </Router>
  )
}

export default App
