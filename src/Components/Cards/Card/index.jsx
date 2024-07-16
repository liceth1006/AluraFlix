import styled from "styled-components";
import {conexion} from '../../../data/conexion'
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { HiArrowsExpand } from "react-icons/hi";
import { VideoCard } from "../../../Context/VideoCardContext";
import { useContext } from "react";

const ContainerCard = styled.div`
  width: 430px;
  height: 290px;
  margin-bottom: 24px;
  position: relative;
  border: 5px solid ${({$color})=>$color};
  border-radius: 20px;
  background-color: #000000;
`;

const IframeEstilizado = styled.iframe`
  width: 100%;
  height: 80%;
  border-radius: 20px 20px 0px 0px;
  border: none;
`;
const ContainerButtonEstilizado = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const ButtonEstilizado = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Card = ({ id, titulo, link,$color }) => {
  const { videos,setVideos,setMostrarVideos } = useContext(VideoCard);

  const eliminarVideo = async(id)=>{
  await conexion.deleteVideos(id)
  const nuevosVideo = videos.filter((video)=> video.id !== id)
  setVideos(nuevosVideo)

  }
  const mostrarVideo = async()=>{
    const mostrarVideo = videos.filter((video)=> video.id === id)
    console.log("video",mostrarVideo)
    setMostrarVideos(mostrarVideo)
  }
  return (
    <>
      <ContainerCard $color={$color}>
        <IframeEstilizado
          src={link}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></IframeEstilizado>
        <ContainerButtonEstilizado>
          <ButtonEstilizado onClick={()=>eliminarVideo(id)}>
            <RiDeleteBinFill  />
            Borrar
          </ButtonEstilizado>
          <ButtonEstilizado>
            <AiFillEdit  />
            Editar
          </ButtonEstilizado>
          <ButtonEstilizado onClick={()=>mostrarVideo(id)}><HiArrowsExpand /> Ver</ButtonEstilizado>
        </ContainerButtonEstilizado>
      </ContainerCard>
    </>
  );
};

export default Card;
