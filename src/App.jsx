
import AppRouter from '../routes.jsx'
import Cabecera from './Components/Cabecera/index.jsx'
import './App.css'
import GlobalStyles from './Components/GlobalStyles/index.jsx'

function App() {


  return (
    <>
    <GlobalStyles/>
      <Cabecera></Cabecera>
     <AppRouter></AppRouter>
    </>
  )
}

export default App
