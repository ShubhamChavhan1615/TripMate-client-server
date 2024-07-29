import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { store } from './app/Store/Store' 
import { Provider } from 'react-redux'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import NotFound from "./Pages/NotFound"
import Profile from './Components/Profile'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import DescPlace from './Components/DescPlace'
import Card from './Components/Card'
import Booking from './Components/Booking'
import Payment from './Components/Payment'
import EditProfile from './Components/EditProfile'
import UserActivity from './Components/UserActivity'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path={`/Profile/:id`} element={<Profile />} />
          <Route path={`userActivity/:id/:name`} element={<UserActivity />} />
          <Route path={`/all/places/:id`} element={<Card />} />
          <Route path={`/:name/:id`} element={<DescPlace />} />
          <Route path={`/book/:name/:id`} element={<Booking />} />
          <Route path={`/payment/confirm/:name/:id`} element={<Payment/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider >
  )
}

export default App
