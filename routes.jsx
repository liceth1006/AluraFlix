import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./src/pages/Home"

const AppRouter = ()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route to="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>

  )

}

export default AppRouter