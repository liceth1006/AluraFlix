import { useEffect, useState } from "react";
import { conexion } from "../../data/conexion.js";
import Card from "./Card/index.jsx";

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
    <>{
      video.map((item)=>{
        return <Card key={item.id} {...item}></Card>
      })
    }
      <h2>ChARDS</h2>
    </>
  );
};

export default Cards;
