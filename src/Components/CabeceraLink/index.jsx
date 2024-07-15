import { Link } from "react-router-dom"
import styled from "styled-components"




const ContainerEstilizado = styled.div`
 background-color: ${props => props.$activo ? "#000000" : "transparent" } ;
 display: flex;
 height: 54px;
 width: 180px;
 justify-content:center;
 align-items: center;
 border-radius: 10px;
 box-shadow: ${props => props.$activo ? "0px 0px 12px 4px #2271D1 inset" : "none"} ;
 border: ${props => props.$activo ? "2px solid #2271D1" : "2px solid #ffffff"} ;
 

`
const StyledLink = styled(Link)`
  color: ${props => props.$activo ? "#2271D1" : "#ffff"} ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-decoration: none; 
`;

const CabeceraLink = ({url,children, activo=false})=>{
  return(
<ContainerEstilizado $activo={activo}>
  <StyledLink to={url} $activo={activo}>
  {children}
  </StyledLink>
</ContainerEstilizado>
  )
}

export default CabeceraLink