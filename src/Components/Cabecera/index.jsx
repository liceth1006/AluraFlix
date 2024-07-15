
import styled from "styled-components"
import Logo from './LogoMain.png'

const HeaderEstilizado = styled.header`
background-color: #262626;

`

const Cabecera = () =>{
  return(
    <HeaderEstilizado>
      <img src={Logo} alt="logo"/>
      
    </HeaderEstilizado>

  )
}

export default Cabecera