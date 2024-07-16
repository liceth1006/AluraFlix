import { useEffect, useState } from "react";
import { conexion } from "../../data/conexion.js";
import Card from "./Card/index.jsx";
import styled from "styled-components";

const ContainerCard = styled.div`
  width: 100%;
  background-color: #D9F7E9;
  padding: 32px;
  box-sizing: border-box;
  text-align: center;
  font-size: 32px;
  position: relative;
`








const Cards = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fechData = async() =>{
      const data  =  await conexion.getVideos();
      setVideo([...data]);
      console.log(data);

    }
   fechData()
  }, []);

  return (
    <ContainerCard>
      {
      video.map((item)=>{
        return <Card key={item.id} {...item}></Card>
      })
    }
    </ContainerCard>
  );
};

export default Cards;
