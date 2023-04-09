import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, Tech, Finance, Business, Science, ContactMe  } from "./components"

const App = () => {
  return (
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
  );
}

export default App;
