import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
