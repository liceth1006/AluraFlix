import { useContext } from "react";
import Card from "./Card/index.jsx";
import styled from "styled-components";
import { VideoCard } from "../../Context/VideoCardContext.jsx";
import { CategoriaContext } from "../../Context/CategoriaContext.jsx";

const ContainerStyle = styled.section`
  width: 100%;
  box-sizing: border-box;
  font-size: 32px;
  margin-top: 20px;
  padding: 20px 10px;
`;

const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  box-sizing: border-box;
  margin-top: 20px;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  background-color: ${({$color})=>$color};
  border-radius: 10px;
  color: white;
  font-size: 32px;
  font-weight: 600;
  padding: 10px 40px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const Cards = () => {
  const { videos } = useContext(VideoCard);
  const { categorias } = useContext(CategoriaContext);
  return (
    <>
        {categorias.map((categoria) => {
          // Filtrar videos por categoría
          const videosFiltrados = videos.filter(video => video.categoria === categoria.id);
          return (
            <ContainerStyle key={categoria.id}>
              <ButtonStyle $color={categoria.color}>{categoria.nombre}</ButtonStyle>
              <ContainerCard>
                {videosFiltrados.map((item) => (
                  <Card $color={categoria.color}  key={item.id} {...item} />
                ))}
              </ContainerCard>
            </ContainerStyle>
          );
        })}
      </>
    );
  };
export default Cards;
