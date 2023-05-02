import {Routes,Route} from 'react-router-dom'
import {Home, Login , Secret, Singup, Dashboard} from '../pages/index'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/secret' element={<Secret/>}/>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default RoutesIndex