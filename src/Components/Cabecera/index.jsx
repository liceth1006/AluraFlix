import styled from "styled-components";
import Logo from "./LogoMain.png";
import CabeceraLink from "../CabeceraLink";
import { useLocation } from "react-router-dom";
const HeaderEstilizado = styled.header`
  background-color: #262626;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;
const SectionImgEstilizado = styled.div`
  padding: 10px;
`;
const DivLinkStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const Cabecera = () => {
  const location = useLocation()
  const currentPath = location.pathname


  return (
    <HeaderEstilizado>
      <SectionImgEstilizado>
        <img src={Logo} alt="logo" />
      </SectionImgEstilizado>
      <DivLinkStyle>
        <CabeceraLink  activo={currentPath === '/'} url="/">Home</CabeceraLink>
        <CabeceraLink   activo={currentPath == '/nuevovideo'} url="/nuevovideo">Nuevo video</CabeceraLink>
      </DivLinkStyle>
    </HeaderEstilizado>
  );
};

export default Cabecera;
