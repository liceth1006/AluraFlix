import { createContext } from "react";
import { useEffect, useState } from "react";
import { conexion } from "../data/conexion";

export const VideoCard = createContext()


export default function VideoProvider ({children}){
  const [videos, setVideos] = useState([]);
  const [mostrarVideos,setMostrarVideos] = useState([
    {
      "id": "2",
      "titulo": "Productividad en el trabajo remoto",
      "imagen": "https://caelum-online-public.s3.amazonaws.com/ESP-2052+-++React%3A+practicando+React+con+Js/282x425+-+Gabi.png",
      "link": "https://www.youtube.com/embed/AULPtYo25Lw?si=UGdKX1NSrEcQ0jfn",
      "categoria": "1",
      "descripcion": "aaaa"
    }
  ])

  useEffect(() => {
    const fechData = async () => {
      const data = await conexion.getVideos();
      setVideos([...data]);
    };
    fechData();
  }, []);



  return(
    <VideoCard.Provider value={{videos,setVideos,mostrarVideos,setMostrarVideos}}>
      {children}
    </VideoCard.Provider>
  )

}