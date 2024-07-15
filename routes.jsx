import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./src/pages/Home"
import GlobalStyles from './src/Components/GlobalStyles'
import FormVideo from "./src/pages/Video"
const AppRouter = ()=>{
  return(
    <BrowserRouter>
    <GlobalStyles/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/nuevovideo" element={<FormVideo/>}></Route>
    </Routes>
    </BrowserRouter>

  )

}

export default AppRouter