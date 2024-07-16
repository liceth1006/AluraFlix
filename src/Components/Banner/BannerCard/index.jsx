import { useContext } from "react";
import { VideoCard } from "../../../Context/VideoCardContext";
import styled from "styled-components";

const IframeEstilizado = styled.iframe`
  width: 100%;
  height: 80%;
  border-radius: 20px 20px 0px 0px;
  border: none;
`;


const BannerCard = () => {
  const { mostrarVideos } = useContext(VideoCard);
  return (
    <>
      {mostrarVideos.map((video) => (
        <div key={video.id}>
          <div>
          <h2>{video.titulo}</h2>
          <p>{video.descripcion}</p>
          </div>
          <div>
          <IframeEstilizado
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></IframeEstilizado>
          </div>
        </div>
      ))}
    </>
  );
};

export default BannerCard;
