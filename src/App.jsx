import './App.css'
import Aos from "aos"
// import Header from './Components/Header/Header'
// import { BrowserRouter } from 'react-router-dom'
// import {Routes , Route} from "react-router-dom"
// import Home from './Components/Home/Home'
// import EventDetails from './Components/EventDetails/EventDetails'
// import Footer from './Components/Footer/Footer'
// import Events from './Components/Events/Events'
// import { Contact } from './Components/Contact/Contact'
import { RouterProvider } from 'react-router-dom'
// import { useEffect } from 'react'
// import Speakers from './Speakers/Speakers'
// import Programs from './Components/Programs/Programs'
// import ProgramEvents from './Components/Programs/ProgramEvents'
// import EventSessionDetails from './Components/EventDetails/EventSessionDetails'
// import Registration from './Components/Registration/Registration'
// import SpeakerDetails from './Speakers/SpeakerDetails'
import { router } from './router/router'
import React from 'react'
function App() {
    // useEffect(()=>{
    //   window.scroll(0,0);
    // },[])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    // <BrowserRouter>
    // <div className="container-3xl overflow-hidden">
    //   <Header/>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/events' element={<Events/>}/>
    //     <Route path="/events/:id" element={<EventDetails/>}/>
    //     <Route path='/events/:eventId/sessions/:sessionId' element={<EventSessionDetails/>}/>
    //     <Route path='/speakers' element={<Speakers/>}/>
    //     <Route path='/speakers/:id' element={<SpeakerDetails/>}/>
    //     <Route path='/programs' element={<Programs/>}/>
    //     <Route path='/programs/:id' element={<ProgramEvents/>}/>
    //     <Route path='/registration/:eventId' element={<Registration/>}/>
    //     <Route path='/contact' element={<Contact/>}/>
    //   </Routes>
    //   <Footer/>
    // </div>
    // </BrowserRouter>
  )
}

export default App
