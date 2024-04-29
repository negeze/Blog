import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import ደራሲ from'./component/ደራሲ'
import Uk from './component/Uk'
function Navget() {
  return (
    <div>
<Router>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Page1' element={<Page1/>}/>
        <Route path='Page2' element={<Page2/>}/>
        <Route path='ደራሲ' element={<ደራሲ/>}/>
        <Route path='Uk' element={<Uk/>}/>
    </Routes>
</Router>

    </div>
  )
}

export default Navget